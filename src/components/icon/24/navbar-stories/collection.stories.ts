import CreatePayment from '@/components/icon/24/ISmCreatePayment.vue'
import Profile from '@/components/icon/24/ISmPeople.vue'
import Home from '@/components/icon/24/ISmHome.vue'
import Payments from '@/components/icon/24/ISmPayments.vue'
import Drafts from '@/components/icon/24/ISmDrafts.vue'
import Support from '@/components/icon/24/ISmSupport.vue'
import Faq from '@/components/icon/24/ISmFaq.vue'
import { EIconColor } from '@/components/icon/types.ts'
import { colors } from '@/components/icon/constants.storybook.ts'

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
