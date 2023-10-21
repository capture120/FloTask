/* eslint-disable react-native/no-inline-styles */
import { ScrollView } from 'react-native';
import { Box, View, Text, Image } from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

/* type TestComponentProps = {
  name: string;
};  PROPS INPUT */

const Guide = (/*NO PROPS*/) => {
  return (
    <ScrollView>
      <View bg="#FFB017" width={wp('100%')} height={hp('100%')}>
        <View alignItems={'center'}>
          <View flexDirection={'column'} w={wp('75%')}>
            <Text fontSize="4xl" bold>
              Preserving Your Legacy:
            </Text>
            <Text fontSize="2xl">
              Practical Steps for Funeral Affordability
            </Text>
            <View flexDirection={'row'} alignItems={'center'}>
              <Image
                size={50}
                borderRadius={35}
                source={{
                  uri: 'https://images1.penguinrandomhouse.com/author/22627'
                }}
                alt="barack"
              />
              <Text> Written by Barack Obama</Text>
            </View>
            <View flexDirection={'row'}>
              <Text m-1> 5 min read </Text>
              <Text m-1> Oct 1, 2023 </Text>
            </View>
          </View>
          <View>
            <Box rounded={55} bg="white" w={wp('100%')} h={hp('100%')}>
              <Text px={'12'} py={'10'} w={wp('75%')} h={hp('100%')}>
                In the grand symphony of life, there are few certainties. Among
                them, one stands out starkly: our time here is finite. Yet, it's
                the inevitability of our final encore that many of us prefer not
                to dwell on. This is entirely human, but it's a fact that can't
                be brushed aside indefinitely. End-of-life planning, while often
                seen as daunting, can be transformed into an empowering
                process—a legacy of care and love for our loved ones. The Price
                of Peace of Mind The mention of end-of-life planning often
                brings to mind wills, trusts, and the distribution of assets.
                While these are crucial aspects, there's another vital component
                that deserves your attention: funeral planning. The cost of
                funeral services can be staggering, leaving families not just
                grieving but also grappling with unexpected financial burdens.
                In today's world, the average cost of a funeral can easily reach
                several thousand dollars, making it one of life's most
                substantial expenses. This reality prompts a critical question:
                How can we ensure a dignified farewell without burdening our
                loved ones? The Legacy Solution At Legacy, we understand the
                importance of preserving your legacy while also being mindful of
                the costs involved. Our mission is to empower you to take
                control of your end-of-life planning with joyous urgency. We
                believe that by confronting these realities and making
                thoughtful decisions today, you can grant your loved ones the
                gift of peace of mind tomorrow. Step 1: Explore Your Options The
                first step to achieving affordable funeral arrangements is to
                explore your options. Funeral costs can vary significantly based
                on factors such as location, type of service, and personal
                preferences. By researching local funeral homes and considering
                cremation or green burial alternatives, you can discover
                cost-effective choices without compromising on respect and
                reverence. Step 2: Pre-Planning with Legacy One of the most
                practical ways to ease the financial burden of your final
                arrangements is through pre-planning. Legacy offers an intuitive
                platform that enables you to pre-plan your funeral with ease. By
                making decisions in advance and securing funds for your funeral,
                you ensure that your wishes are honored while alleviating the
                financial stress on your loved ones. Step 3: Share Your Plan
                Transparency is key. Once you've made your end-of-life plans,
                communicate them with your family and loved ones. Sharing your
                wishes not only fosters understanding but also avoids any
                unexpected surprises when the time comes. It ensures that your
                choices are respected and followed, offering a sense of closure
                to your loved ones. Step 4: Seek Professional Guidance
                Navigating the intricacies of end-of-life planning can be
                overwhelming. That's where our team at Legacy shines. We connect
                you with trusted professionals who can provide expert guidance
                on legal and financial matters. Our extensive network of
                attorneys, doulas, and funeral planning experts ensures that you
                have the support you need. Step 5: Embrace Peace of Mind With
                your end-of-life plans in place, you can embrace the present
                with newfound peace of mind. Legacy's platform streamlines the
                process, making it accessible, affordable, and personal. By
                preserving your legacy today, you create a lasting memory of
                love, thoughtfulness, and consideration for those who matter
                most. In Conclusion Preserving your legacy is a journey of love
                and responsibility. It's about ensuring that your final chapter
                is both a celebration of life and a testament to your care for
                those who will remember you. Legacy is your partner in this
                journey, offering expertise, affordability, and a deep
                commitment to making the end-of-life planning process as smooth
                as possible. As you reflect on your life's journey, consider the
                importance of end-of-life planning. Embrace the joyful urgency
                of today, and gift your loved ones the solace of knowing your
                final wishes are honored.
              </Text>
            </Box>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Guide;
