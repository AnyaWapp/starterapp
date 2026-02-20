/**
 * @jest-environment node
 */

import { act, create } from "react-test-renderer";
import PageComponentWeather from "../../../pages/components/weather";

describe("PageComponentWeather", () => {
  test("renders correctly", async () => {
    let component: any;

    await act(async () => {
      component = await create(<PageComponentWeather />);
    });

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("clicks the h1 element and updates the state", async () => {
    let component: any;

    await act(async () => {
      component = await create(<PageComponentWeather />);
    });

    await act(async () => {
      component.root.findByType("h1").props.onClick();
    });

    expect(component.toJSON()).toMatchSnapshot();
  });
});
// This test sets the environment to jsdom, which simulates a browser. It then imports act 
// and create from react-test-renderer so you can render the React component and capture 
// its output. 