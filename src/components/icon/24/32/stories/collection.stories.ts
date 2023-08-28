/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 01.07.2023
 */
import { EDirectionArrow, EIconColor } from "@/components/icon/types.ts";
import Details from "@/components/icon/24/32/ISmMdDetails.vue";
import DirectionArrow from "@/components/icon/24/32/ISmMdDirectionArrow.vue";
import MoneyDirection from "@/components/icon/24/32/ISmMdMoneyDirection.vue";
import Payments from "@/components/icon/24/32/ISmMdPayments.vue";

import { colors } from "@/components/icon/constants.storybook";
import { EMoneyDirection } from "@/types";

export default {
  computed: {
    EMoneyDirection() {
      return EMoneyDirection;
    },
    EDirectionArrow() {
      return EDirectionArrow;
    },
    EIconColor() {
      return EIconColor;
    },
  },
  title: "Icons/32x32/Icons",
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: colors,
    },
  },
};

export const Collection = {
  render: (args: { color: EIconColor }) => ({
    components: {
      Details,
      DirectionArrow,
      MoneyDirection,
      Payments,
    },
    setup() {
      return args;
    },
    template: `
      <div class="icon-list">
        <div>
          <Details :color="color"/>
          <span>Details</span>
        </div>
        <div>
          <Payments :color="color"/>
          <span>Payments</span>
        </div>
        <div>
          <DirectionArrow :color="color" direction="send"/>
          <span>DirectionArrow | send</span>
        </div>
        <div>
          <DirectionArrow :color="color" direction="receive"/>
          <span>DirectionArrow | receive</span>
        </div>
        <div>
          <MoneyDirection :color="color" direction="send"/>
          <span>MoneyDirection | send</span>
        </div>
        <div>
          <MoneyDirection :color="color" direction="receive"/>
          <span>MoneyDirection | receive</span>
        </div>
      </div>
    `,
  }),
  args: {
    color: EIconColor.primary,
  },
};
