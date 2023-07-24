import CreatePayment from '@/components/icon/navbar/CreatePayment.vue'
import Profile from '@/components/icon/navbar/People.vue'
import Home from '@/components/icon/navbar/Home.vue'
import Payments from '@/components/icon/navbar/Payments.vue'
import Drafts from '@/components/icon/navbar/Drafts.vue'
import Support from '@/components/icon/navbar/Support.vue'
import Faq from '@/components/icon/navbar/Faq.vue'
import { EIconColor } from '@/components/icon/types.ts'
import { colors } from '@/components/icon/constants.storybook'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  computed: {
    EIconColor() {
      return EIconColor
    },
  },
  title: 'Icons/Navbar/NavBar',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: colors,
    },
  },
}

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
      <div>
      <div>
        <CreatePayment/>
        - CreatePayment
      </div>
      <div>
        <Profile :color="color"/>
        - Profile
      </div>
      <div>
        <Home :color="color"/>
        - Home
      </div>
      <div>
        <Payments :color="color"/>
        - Payments
      </div>
      <div>
        <Drafts :color="color"/>
        - Drafts
      </div>
      <div>
        <Support :color="color"/>
        - Support
      </div>
      <div>
        <Faq :color="color"/>
        - Faq
      </div>
      </div>
    `,
  }),
  args: {
    color: EIconColor.primary,
  },
}
