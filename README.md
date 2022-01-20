# プロジェクトの概要

このリポジトリは「らくらく日本語設定｜リテリア Font Picker」の LP です。

# 開発に参加するまでの流れ

以下の手順を踏んで開発に参加しましょう。

## 1. `git clone`

以下のコマンドを実行してクローンします。

```shell
git clone git@github.com:UnReacts/reterior-ja-font-app-lp.git
```

## 2. `npm install`

`npm install`を行います。`npm`のバージョンは Volta で固定していますが、Volta を使っていない人は、`npm -v`で 8 系かどうかを確かめます。

```shell
#npmのバージョンを確認（8系でない場合は、8系をインストール）
npm -v

#パッケージをインストール
npm install
```

## 3. `npm run dev`

`npm run dev`でローカルサーバーを立ち上げます。

```shell
npm run dev
```

# アプリ LP の雛形として利用する

プルすることでアプリ LP の雛形として利用することができます。
`next-tempalte-v12` から作成しています。Next.js v12 と Tailwind CSS v3 の構成です。

```shell
mkdir your-app-lp
cd your-app-lp
git init
git pull git@github.com:UnReacts/reterior-ja-font-app-lp.git
```

## デフォルト値を変更する

`lib/const.ts` で LP のデフォルト値を設定することができます。それぞれ設定してください。
以下、設定例です。

```ts
export const APP_NAME = 'リテリア Font Picker';
export const APP_ROOT_URL = 'https://font-picker.reterior.jp/';
export const APP_DEFAULT_DESCRIPTION =
  '「Shopifyでも日本語フォントを使いたい...」 その悩みを解消できるのが『リテリア Font Picker』です。コード編集なしで日本語フォントを使用することが可能です！';
export const APP_DEFAULT_OG_IMAGE_PATH = '/reterior_ogp.png';
export const APP_FAVICON = '/ja-font-app-icon_512x512.png';
```

- `APP_NAME`: アプリの名前を入れてください。ヘッダーのロゴとタイトルのデフォルトとして使われます。
- `APP_ROOT_URL`: アプリのホストURLを入れてください。OGP の設定などで使用します。
- `APP_DEFAULT_DESCRIPTION`: メタディスクリプションを入れてください。デフォルトのメタディスクリプションになります。
- `APP_DEFAULT_OG_IMAGE_PATH`: OGP の画像パスを入れてください。デフォルトの OGP 画像に設定されます。
- `APP_FAVICON`: アプリのファビコンの画像パスを入れてください。ファビコンとヘッダーロゴに表示されます。

これらの値は、`<Layout>` コンポーネントの Props でページごとに上書きすることができます。
