---
layout: paper
title: "On the Kodaira dimension"
title_ja: "小平次元について"
authors: "Osamu Fujino, Taro Fujisawa"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG]
arxiv_abstract: >-
  We discuss the behavior of the Kodaira dimension under smooth morphisms.
topic: algebraic-geometry
tags: [positivity, hodge-theory, higgs-nonabelian-hodge]
arxiv_id: "2407.09210v1"
arxiv_url: "https://arxiv.org/abs/2407.09210"
arxiv_submitted: "2024-07-12"
arxiv_updated: "2024-07-12"
summary: >-
  smooth morphismの下で対数小平次元がどのように振る舞うかを、Parkの対数base-change theoremと混合Hodge構造の変動を用いて調べる。底空間がlog general typeであることの特徴づけや、小平次元の加法性予想に対する条件付き結果を与える。
abstract_en: >-
  We discuss the behavior of the Kodaira dimension under smooth morphisms.
summary_en: ""
abstract_ja: >-
  smooth morphismの下での小平次元の振る舞いを論じる。
abstract_source_url: "https://arxiv.org/abs/2407.09210"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2407.09210v1](https://arxiv.org/abs/2407.09210)
- **著者:** Osamu Fujino, Taro Fujisawa
- **初回投稿日・最終更新日:** 2024年7月12日
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

ファイバー空間の小平次元には、全空間、底空間、一般ファイバーの不変量を結ぶ加法性が期待される。本論文はsmooth morphismとsimple normal crossing境界をもつ対数的設定で、この問題を扱う。

技術的な出発点はParkの対数base-change theoremとfiber-product trickである。これをmixed Hodge structureのvariationおよびlogarithmic Higgs sheafに結びつけ、直像層に入る線束から対数1形式のテンソル冪への非零写像を構成する。

主要な応用は、一般ファイバーの対数小平次元が非負のとき、全空間で期待される最大値の等式が底空間のlog general type性を特徴づけることである。また一般化豊富性予想の下で対数小平次元の加法性を導き、予想の既知部分と未解決部分を明確に分ける。

## 背景と問題設定

$f:X\to Y$ を滑らかな射影多様体間の全射、$E,D$ をそれぞれのsimple normal crossing divisorとし、$f$ は $Y\setminus D$ 上smooth、$f^{-1}(D)\subset E$ とする。目標となる加法性は、十分一般のファイバー $F$ に対する

$$
\kappa(X,K_X+E)=\kappa(Y,K_Y+D)+\kappa(F,(K_X+E)|_F)
$$

である。

## 主結果

### Theorem 1.4

ある $N>0$ について

$$
L^{\otimes N}\longrightarrow\left(f_*\omega_{(X,E)/(Y,D)}^{\otimes N}\right)^{\vee\vee}
$$

が非零なら、pseudo-effective line bundle $P$ と $r>0,k\geq0$ が存在し、

$$
L^{\otimes r}\otimes P\longrightarrow\left(\Omega_Y^1(\log D)\right)^{\otimes kr}
$$

が非零となる。これは後続の小平次元比較を支えるHiggs層による橋渡しである。

### Theorem 1.5

$\kappa(F,(K_X+E)|_F)\geq0$ の下で、

$$
\kappa(Y,K_Y+D)=\dim Y
$$

であることと

$$
\kappa(X,K_X+E)=\kappa(F,(K_X+E)|_F)+\dim Y
$$

であることが同値となる。前者から後者は既知であり、逆向きが新しい部分である。

### Theorem 1.12とTheorem 1.14

Introductionでは、底空間のIitaka fibrationの一般ファイバーに一般化豊富性を仮定すると期待される上側不等式が成り立ち、一般化豊富性予想全体を仮定すれば上の加法性等式が成立すると述べる。後者は無条件の解決ではなく、明示された予想に依存する条件付き結果である。

## 証明の見取り図

対数fiber-product trickで直像層のテンソル冪を高いfiber productの直像へ比較し、mixed Hodge structureのvariationから得る弱正値性とgraded logarithmic Higgs sheafを用いてTheorem 1.4の非零写像を作る。その写像が底空間の対数微分の正値性を拘束し、小平次元の等式から底空間がlog general typeであることを引き出す。

## 原論文との対応
- **Abstractページ:** [arXiv:2407.09210](https://arxiv.org/abs/2407.09210)
- **Introduction:** Section 1, pp. 1–5
- **主要定理:** Theorems 1.4, 1.5, 1.8, 1.12, 1.14
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
