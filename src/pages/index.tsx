import Layout from '@/components/layout/Layout';
import SectionBgColor from '@/components/layout/SectionBgColor';
import ClameBelt from '@/components/uiGroup/ClameBelt';
import FifthFeatures from '@/components/uiGroup/FifthFeatures';
import FloatImage from '@/components/uiGroup/FloatImage';
import Hero from '@/components/uiGroup/Hero';
import ImageWithText from '@/components/uiGroup/ImageWithText';
import PopFlow from '@/components/uiGroup/PopFlow';
import SectionTitle from '@/components/uiParts/SectionTitle';

const Home = (): JSX.Element => {
  return (
    <Layout
      path="/"
      title="らくらく日本語フォント設定｜リテリア Font Picker"
      noTitleTemplate={true}
      isTopPage={true}
    >
      <Hero
        title1="らくらく日本語フォント設定"
        title2="リテリア Font Picker"
        text1="日本製"
        text2="Shopifyアプリ"
        buttonText1="\ 2021年1月リリース /"
        buttonText2="今すぐお問い合わせ"
        imgUrl="/hero.svg"
        link="https://apps.shopify.com/shopify-application-314?locale=ja&surface_detail=%E3%83%AA%E3%83%86%E3%83%AA%E3%82%A2&surface_inter_position=1&surface_intra_position=1&surface_type=search"
        btnColor="#444444"
      />

      <SectionTitle
        title="Shopifyで日本語フォントを実現"
        subTitle="Shopify Japanese Font"
        color="#BC002D"
      />
      <ImageWithText
        isImageLeft={false}
        title="らくらく日本語フォント設定｜リテリア Font Picker とは"
        text="Shopifyアプリである、らくらく日本語フォント設定｜リテリア Font Picker は、Shopify ストアに簡単に日本語フォントを導入するアプリです。日本語フォントを用いて、ストアのブランドを演出することができます。"
        height={500}
        width={700}
        imgUrl="/reterior-font-picker-1.svg"
        alt=""
      />
      <ImageWithText
        isImageLeft
        title="使いたいフォントを選ぶだけ！"
        text="Shopifyアプリである、らくらく日本語フォント設定｜リテリア Font Picker は、インストール後、わずか30秒で日本語フォントを使うことができます。シンプルな設計で、Shopifyアプリに慣れていない方も安心してご利用いただけます。"
        height={500}
        width={700}
        imgUrl="/reterior-font-picker-2.svg"
        alt=""
      />

      <SectionBgColor bgColor="bg-gray-100">
        <SectionTitle
          title="リテリア Font Picker の特徴"
          subTitle="Shopify app features"
          color="#BC002D"
        />
        <FifthFeatures
          text1="日本製のShopifyアプリ"
          text2="日本語の管理画面"
          text3="日本人エンジニアによるサポート"
          text4="日本語フォントでのサイト表示"
          text5="カスタム Web フォントの導入"
        />
        <ClameBelt
          title1="リテリア Font Picker の"
          title2="導入はこちらから！"
          title3="\ 2022年1月リリース！/"
          buttonText="今すぐ導入"
          text1=""
          text2=""
          link="https://apps.shopify.com/shopify-application-314?locale=ja&surface_detail=%E3%83%AA%E3%83%86%E3%83%AA%E3%82%A2&surface_inter_position=1&surface_intra_position=1&surface_type=search"
          bgColor="#666666"
          btnColor="#BC002D"
        />
      </SectionBgColor>

      <SectionTitle
        title="リテリア Font Picker について"
        subTitle="About Shopify app"
        color="#BC002D"
      />
      <FloatImage
        imgUrl1="/reterior-font-picker-3.svg"
        alt1="フォントを選ぶだけのらくらく設定"
        title1="フォントを選ぶだけのらくらく設定"
        text1="発売前に商品の情報をちょい出ししたい！ 必要な操作は、アプリを有効化して使用したいフォントを選ぶだけ！ コード編集は一切必要ないので、どなたでも簡単にご利用いただけます。"
        imgUrl2="/reterior-font-picker-4.svg"
        alt2="カスタムWebフォントを読み込んで使用可能"
        title2="カスタムWebフォントを読み込んで使用可能"
        text2="カスタムWebフォントのインポートタグとフォント設定を貼り付けるだけで、お好みの日本語Webフォントを表示する機能もご用意しております。"
        imgUrl3="/reterior-font-picker-5.svg"
        alt3="日本製 Shopify アプリ"
        title3="日本製 Shopify アプリ"
        text3="らくらく日本語フォント設定｜リテリア Font Picker は、日本人エンジニアが日本ユーザー向けに設計しています。オール日本語対応です。"
      />

      <SectionBgColor bgColor="bg-gray-100">
        <SectionTitle title="アプリ導入の流れ" subTitle="Flow" color="#BC002D" />
        <PopFlow
          titleColor="#BC002D"
          stepColor="#BC002D"
          stepBgColor="#ffffff"
          borderColor="#BC002D"
          popFlowData={[
            {
              step: 'STEP 1',
              title: 'アプリのインストール',
              description:
                'Shopifyアプリストアから、「らくらく日本語フォント設定｜リテリア Font Picker」のインストールを行って下さい。',
            },
            {
              step: 'STEP 2',
              title: '管理画面からアプリを有効化',
              description:
                'アプリ管理画面の左側のメニューから、[ 日本語フォントを有効化 ]をクリックします。テーマのカスタマイズ画面が開きアプリが有効化されます。',
            },
            {
              step: 'STEP 3',
              title: '日本語フォントを選択',
              description:
                'テーマのカスタマイズ画面を見ながら、日本語フォントを選択してください。選択したあと、変更を保存すると日本語フォントがサイト表示に反映されます。',
            },
          ]}
        />
      </SectionBgColor>

      <ClameBelt
        title1="リテリア Font Picker の"
        title2="導入はこちらから！"
        title3="\ 2022年1月リリース！/"
        buttonText="今すぐ導入"
        text1=""
        text2=""
        link="https://apps.shopify.com/shopify-application-314?locale=ja&surface_detail=%E3%83%AA%E3%83%86%E3%83%AA%E3%82%A2&surface_inter_position=1&surface_intra_position=1&surface_type=search"
        bgColor="#666666"
        btnColor="#BC002D"
      />
    </Layout>
  );
};

export default Home;
