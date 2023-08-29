import CreatePayment from '@/components/icon/24/ISmCreatePayment.vue'
import Profile from '@/components/icon/24/ISmPeople.vue'
import Home from '@/components/icon/24/ISmHome.vue'
import Payments from '@/components/icon/24/ISmPayments.vue'
import Drafts from '@/components/icon/24/ISmDrafts.vue'
import Support from '@/components/icon/24/ISmSupport.vue'
import Faq from '@/components/icon/24/ISmFaq.vue'
import { EIconColor, EIconSize } from '@/types/icon.types.ts'
import { defaultIconArgs, defaultIconArgTypes } from '@/shared/common.storybook.ts'

// More on how to set up linear at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  computed: {
    EIconColor() {
      return EIconColor
    },
  },
  title: 'Icons/Navbar/Navbar',
  tags: ['autodocs'],
  argTypes: defaultIconArgTypes
}

// More on writing linear with args: https://storybook.js.org/docs/vue/writing-stories/args
export const NavBar = {
  render: (args: {
      color: EIconColor,
      size: EIconSize,
      disabled: boolean,
    }) => ({
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
          <CreatePayment
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>CreatePayment</span>
        </div>
        <div>
          <Profile
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Profile</span>
        </div>
        <div>
          <Home
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Home</span>
        </div>
        <div>
          <Payments
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Payments</span>
        </div>
        <div>
          <Drafts
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Drafts</span>
        </div>
        <div>
          <Support
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Support</span>
        </div>
        <div>
          <Faq
            :color="color"
            :size="size"
            :disabled="disabled"
          />
          <span>Faq</span>
        </div>
      </div>
    `,
  }),
  args: defaultIconArgs
}
