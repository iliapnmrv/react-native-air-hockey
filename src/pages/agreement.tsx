import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import BackgroundImage from '../components/Images/BackgroundImage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {setIsAgree} from '../store/reducers/mainReducer';
import {useAppDispatch, useAppSelector} from '../hooks/redux';

type Props = NativeStackScreenProps<RootStackParamList, 'Agreement', 'MyStack'>;

const Agreement = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const onAgreePress = () => {
    dispatch(setIsAgree(true));
    navigation.navigate('Greeting');
  };

  const {isUserAgree} = useAppSelector(state => state.main);

  useEffect(() => {
    isUserAgree ? navigation.navigate('Greeting') : null;
  }, []);

  return (
    <BackgroundImage>
      <ScrollView
        contentContainerStyle={{display: 'flex', alignItems: 'center'}}>
        <Text style={styles.agreementText}>
          Ice Winner is a Free app. This SERVICE is provided at no cost and is
          intended for use as is. This page is used to inform visitors regarding
          my policies with the collection, use, and disclosure of Personal
          Information if anyone decided to use my Service. Privacy Policy for
          the EU and other country users of Ice Winner and our EU and other
          country business partners and suppliers. We have created this Privacy
          Policy statement in order to demonstrate our firm commitment to your
          privacy. The following discloses our information gathering and
          dissemination practices. We reserve the right to change this Privacy
          Policy Ice Winner from time to time, so be sure to check it
          periodically. 1. COLLECTION OF INFORMATION The data we collect depends
          on the context of your interactions with us, the choices you make,
          including your privacy settings, and the products and features you
          use. The data we collect can include SDK/API/JS code version, browser,
          Internet service provider, IP address, platform, timestamp,
          application identifier, application version, application distribution
          channel, independent deice identifier, iOS ad identifier (IDFA),
          Android ad master identifier, network card (MAC) address, carrier data
          and international mobile device identification code (IMEI) The
          equipment model, the terminal manufacturer, the terminal device
          operating system version, the session start / stop time, the location
          of the language, the time zone and the network state (WiFi and so on),
          the hard disk, the CPU, and the battery use, etc 2. USE OF PERSONAL
          DATA Product Improvement. We use data to continually improve our
          products, including adding new features or capabilities. 3. SHARING OF
          PERSONAL DATA To improve our product and provide you better service,
          we also share personal data with vendors or agents working on our
          behalf for the purposes described in this privacy policy. For example,
          companies we&apos;ve hired to provide data analytical services may
          need to collect and access to personal data to provide those
          functions. In such cases, these companies must abide by our data
          privacy and security requirements. 4. LEGAL BASIS FOR DATA PROCESSING
          We process Personal Data for the purposes set out in this Privacy
          Policy, as described above. Our legal basis to process personal data
          includes processing that is: necessary for the performance of the
          contract with you (for example, to provide you with the services you
          request and to identify and authenticate you , so you may use the
          Sites); necessary to comply with legal requirements (for example, to
          comply with applicable accounting rules and to make mandatory
          disclosures to law enforcement); necessary for our legitimate
          interests (for example, to manage our relationship with you, to ensure
          the security of our services, to communicate with you about our
          products and services); and based on consent by our customers (for
          example, to place certain cookies and to share your information with
          third parties for advertising purposes). In some instances, you may be
          required to provide us with Personal Data for processing as described
          above, in order for us to be able to provide you all of our services,
          and for you to use all the features of our Sites. 5. International
          Transfers of Personal Data Our business may require us to transfer
          your Personal Data to countries outside the European Economic Area
          (“EEA”), including to countries such as the People’s Republic of China
          or Singapore. We take appropriate steps to ensure that recipients of
          your Personal Data are bound to duties of confidentiality, and we
          implement measures such as standard contractual clauses. A copy of
          those clauses can be obtained by contacting our Help Center. 6. Your
          Rights Subject to limitations in applicable law, you are entitled to
          object to or request the restriction of processing of your Personal
          Data, and to request access to, rectification, erasure and portability
          of your own Personal Data. Where the use of your information is based
          on consent, you can withdraw this consent at any time without
          affecting the lawfulness of processing based on consent before its
          withdrawal. If you are aware of changes or inaccuracies in your
          information, you should inform us of such changes so that our records
          may be updated or corrected. We retain your Personal Data as long as
          needed to provide services or products to you, or as required or
          permitted by applicable laws, such as tax and accounting laws.
        </Text>
        <TouchableOpacity
          style={styles.iAgreeButton}
          activeOpacity={0.7}
          onPress={onAgreePress}>
          <Text style={styles.iAgreeButtonText}>I agree</Text>
        </TouchableOpacity>
      </ScrollView>
    </BackgroundImage>
  );
};

export default Agreement;

const styles = StyleSheet.create({
  agreementText: {
    fontFamily: 'Humnst777 BT',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    color: '#fff',
    padding: 8,
  },
  iAgreeButton: {
    width: 156,
    height: 46.75,
    background: '#8200FF',
    borderColor: '#E3CAFB',
    borderWidth: 2,
    borderRadius: 47.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 33,
  },
  iAgreeButtonText: {
    fontFamily: 'Humnst777 Blk BT',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 31,
    color: '#FFFFFF',
  },
});
