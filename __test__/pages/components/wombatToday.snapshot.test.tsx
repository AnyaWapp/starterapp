/**
 * @jest-environment node
 */

import { act, create } from "react-test-renderer";
import WombatToday  from "../../../pages/components/wombatToday";

describe("WombatComponent", () => {
  test("default Wombat", async () => {
    let component: any;

    await act(async () => {
      component = await create(<WombatToday />);
    });

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("no wombat when clicked :(", async () => {
    let component: any;

    await act(async () => {
      component = await create(<WombatToday />);
    });

    await act(async () => {
      component.root.findByType("button").props.onClick();
    });

    expect(component.toJSON()).toMatchSnapshot();
  });
});