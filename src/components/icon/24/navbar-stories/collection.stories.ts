import CreatePayment from "@/components/icon/24/ISmCreatePayment.vue";
import Profile from "@/components/icon/24/ISmPeople.vue";
import Home from "@/components/icon/24/ISmHome.vue";
import Payments from "@/components/icon/24/ISmPayments.vue";
import Drafts from "@/components/icon/24/ISmDrafts.vue";
import Support from "@/components/icon/24/ISmSupport.vue";
import Faq from "@/components/icon/24/ISmFaq.vue";
import { EIconColor } from "@/components/icon/types.ts";
import { colors } from "@/components/icon/constants.storybook.ts";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
'Icons/Navbar/Icons'ar/Icons",
'autodocs'autodocs"],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: colors,
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const NavBar = {
  render: (args: { color: EIconColor }) => ({
    components: {
      CreatePayment,
      Profile,
      Home,
      Payments,
      Drafts,
      Support,
      Faq,
    },
    setup() {
      return args
    },
    template: `
      <div class="icon-list">
        <div>
          <CreatePayment/>
          <span>CreatePayment</span>
        </div>
        <div>
          <Profile :color="color"/>
          <span>Profile</span>
        </div>
        <div>
          <Home :color="color"/>
          <span>Home</span>
        </div>
        <div>
          <Payments :color="color"/>
          <span>Payments</span>
        </div>
        <div>
          <Drafts :color="color"/>
          <span>Drafts</span>
        </div>
        <div>
          <Support :color="color"/>
          <span>Support</span>
        </div>
        <div>
          <Faq :color="color"/>
          <span>Faq</span>
        </div>
      </div>
    `,
  }),
  args: {
    color: EIconColor.primary,
  },
};
