import Layout from '@/components/layout/Layout';
import SectionBgColor from '@/components/layout/SectionBgColor';
import AppealBelt from '@/components/uiGroup/AppealBelt';
import FifthFeatures from '@/components/uiGroup/FifthFeatures';
import FloatImage from '@/components/uiGroup/FloatImage';
import Hero from '@/components/uiGroup/Hero';
import ImageWithText from '@/components/uiGroup/ImageWithText';
import PopFlow from '@/components/uiGroup/PopFlow';
import SectionTitle from '@/components/uiParts/SectionTitle';
import { APP_LIST_URL } from '@/lib/const';

const Home = (): JSX.Element => {
  return (
    <Layout
      path="/"
      title="よくある質問どこでも挿入｜リテリア FAQ"
      noTitleTemplate={true}
      isTopPage={true}
    >
      <Hero
        title1="よくある質問どこでも挿入"
        title2="リテリア FAQ"
        text1="日本製 Shopify アプリ"
        text2="ノーコードで簡単設定"
        buttonText1="\ 2021年3月リリース /"
        buttonText2="今すぐお問い合わせ"
        imgUrl="/reterior-faq_1.svg"
        link={APP_LIST_URL}
        btnColor="#444444"
        bgColor="bg-gray-100"
      />

      <SectionTitle
        title="リテリア FAQ でよくある質問を実現"
        subTitle="What's this Shopify App"
        color="#00D9F5"
      />
      <ImageWithText
        isImageLeft={false}
        title="よくある質問どこでも挿入｜ リテリア FAQ とは"
        text="Shopifyアプリである、『よくある質問どこでも挿入｜ リテリア FAQ』は、Shopify ストアにノーコードでどこでもよくある質問（FAQ）セクションを挿入することができるアプリです。よくある質問をサイト内に表示することで顧客の安心感につながりコンバージョンUPを期待できます。"
        height={500}
        width={700}
        imgUrl="/reterior-faq_2.svg"
        alt=""
      />
      <ImageWithText
        isImageLeft
        title="ノーコードで好きなデザインにカスタマイズできる！"
        text="Shopifyアプリである、『よくある質問どこでも挿入｜ リテリア FAQ』は、ノーコードで直感的にデザインをカスタマイズすることができます。テーマエディタでリアルタイムでUIを見ながら編集できるので、Shopify に慣れていない方でも安心してご利用いただけます。"
        height={500}
        width={700}
        imgUrl="/reterior-faq_3.svg"
        alt=""
      />

      <SectionBgColor bgColor="bg-gray-100">
        <SectionTitle title="リテリア FAQ の特徴" subTitle="Shopify app features" color="#00D9F5" />
        <FifthFeatures
          text1="日本製のShopifyアプリ"
          text2="日本語の管理画面"
          text3="日本人エンジニアによるサポート"
          text4="よくある質問(FAQ)をどこでも挿入"
          text5="ノーコードで簡単カスタマイズ"
        />
        <AppealBelt
          title1="リテリア FAQ の"
          title2="導入はこちらから！"
          title3="\ 2022年3月リリース！/"
          buttonText="今すぐ導入"
          text1=""
          text2=""
          link={APP_LIST_URL}
          bgColor="#666666"
          btnColor="#00D9F5"
        />
      </SectionBgColor>

      <SectionTitle title="リテリア FAQ について" subTitle="About Shopify app" color="#00D9F5" />
      <FloatImage
        imgUrl1="/reterior-faq_4.svg"
        alt1="よくある質問（FAQ）をどこでも挿入可能"
        title1="よくある質問（FAQ）をどこでも挿入可能"
        text1="TOP、お問い合わせ、商品ページなど...どのページにでもよくある質問（FAQ）セクションを挿入することができます。"
        imgUrl2="/reterior-faq_5.svg"
        alt2="ノーコードで簡単カスタマイズ"
        title2="ノーコードで簡単カスタマイズ"
        text2="テーマエディタでセクションと同じ操作でデザインをカスタマイズできます。そのため、見た目をリアルタイムで確認しながら編集ができます。"
        imgUrl3="/reterior-faq_6.svg"
        alt3="日本製 Shopify アプリ"
        title3="日本製 Shopify アプリ"
        text3="リテリア FAQ は、日本人エンジニアが日本ユーザー向けに設計しています。オール日本語対応です。Shopify に不慣れな方でも安心してご利用いただけます。"
      />

      <SectionBgColor bgColor="bg-gray-100">
        <SectionTitle title="アプリ導入の流れ" subTitle="Flow" color="#00D9F5" />
        <PopFlow
          titleColor="#00D9F5"
          stepColor="#00D9F5"
          stepBgColor="#ffffff"
          borderColor="#00D9F5"
          popFlowData={[
            {
              step: 'STEP 1',
              title: 'アプリのインストール',
              description:
                'Shopifyアプリストアから、「よくある質問どこでも挿入｜ リテリア FAQ」のインストールを行って下さい。',
            },
            {
              step: 'STEP 2',
              title: '管理画面からアプリを有効化',
              description:
                'アプリ管理画面の自動インストールより[ 有効化 ]をクリックします。自動インストールでは、お問い合わせページに自動で FAQ セクションが挿入されます。その他のページに FAQ を表示したい場合は、管理画面に記載の手動インストール手順を参考にしてください。',
            },
            {
              step: 'STEP 3',
              title: 'テーマエディタで FAQ をカスタマイズ',
              description:
                'テーマのカスタマイズ画面を開き、FAQ セクションの質問・回答を入力していきます。また、デザインもセクション感覚でカスタマイズすることができます。',
            },
          ]}
        />
      </SectionBgColor>

      <AppealBelt
        title1="リテリア FAQ の"
        title2="導入はこちらから！"
        title3="\ 2022年3月リリース！/"
        buttonText="今すぐ導入"
        text1=""
        text2=""
        link={APP_LIST_URL}
        bgColor="#666666"
        btnColor="#00D9F5"
      />
    </Layout>
  );
};

export default Home;
