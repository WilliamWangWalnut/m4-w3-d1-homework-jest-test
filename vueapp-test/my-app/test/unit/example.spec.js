import { shallowMount } from "@vue/test-utils";

const MesssageComponent = {
  template: "<p>{{ msg }}</p>",
  props: ["msg"],
};

describe("MessageComponent", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(MesssageComponent, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
