---
layout: paper
title: "Steenbrink vanishing theorem for big line bundles"
title_ja: "big 線束に対する Steenbrink 消滅定理"
authors: "Yuta Watanabe"
topic: complex-geometry
arxiv_id: "2608.01519v1"
arxiv_url: "https://arxiv.org/abs/2608.01519"
arxiv_submitted: "2026-08-02"
arxiv_updated: "2026-08-02"
arxiv_categories: "math.CV"
summary: >-
  ample 線束に対する Steenbrink 消滅定理を、乗数イデアル層を組み込むことでコンパクト複素空間上の big 線束へ拡張する。特異 Hermitian 計量を適切に選び、対数的微分形式のコホモロジーが $p+q>n$ で消滅することを示し、nef and big の場合には乗数イデアルを式から除ける。
abstract_en: ""
summary_en: >-
  The paper extends a logarithmic Steenbrink-type vanishing statement from ample line bundles to big line bundles on compact complex spaces. After resolving the space and the algebraic singularities of a suitably chosen positively curved singular Hermitian metric, the vanishing involves logarithmic forms, the reduced exceptional divisor, and the associated multiplier ideal. A positivity result for a corrected rational line bundle is the main input. For nef and big line bundles, the metric can be chosen so that the multiplier ideal is trivial, yielding a cleaner analogue of Kawamata--Viehweg vanishing.
abstract_ja: >-
  複素射影多様体上の ample 線束に対する Steenbrink 消滅定理を、コンパクト複素空間上の big 線束へ一般化する。適切な正曲率特異 Hermitian 計量とその乗数イデアル層を用い、特異点解消上の対数的微分形式のコホモロジーが Kodaira--Akizuki--Nakano 型の次数範囲で消滅することを示す。nef and big の場合には乗数イデアル層が自明になる形も得られる。
abstract_source_url: "https://arxiv.org/abs/2608.01519"
license_name: "arXiv non-exclusive distribution license 1.0"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.01519](https://arxiv.org/abs/2608.01519)
- **著者:** Yuta Watanabe
- **初回投稿日:** 2026年8月2日
- **最終更新日:** 2026年8月2日（v1）
- **主分類・副分類:** Complex Variables (math.CV)
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## イントロダクションの日本語要約

コホモロジー消滅定理は、正則切断の存在を通じて複素幾何、代数幾何、多変数複素解析を支える。Kodaira--Akizuki--Nakano 消滅は ample 線束に対して $p+q>n$ の範囲を扱うが、ample を big に弱めると同じ形は一般には成り立たない。

Nadel 消滅は、正曲率 current をもつ特異 Hermitian 計量 $h$ の乗数イデアル層 $\mathcal I(h)$ を導入することで、big 線束に対する最適な拡張を与える。一方、Ramanujam の反例が示すように、乗数イデアルを入れても一般の微分形式について Kodaira--Akizuki--Nakano と同じ全次数範囲をそのまま得ることはできない。

Steenbrink の定理は、射影多様体の特異集合を解消し、その逆像である単純正規交差因子 $E$ に沿う対数的微分形式 $\Omega^p(\log E)\otimes\mathcal O(-E)$ を用いる。この対数的設定では、引き戻した ample 線束自体が必ずしも ample でなく big であることが、より一般の big 線束版を期待させる。

本論文の Theorem 1.3 は、純次元 $n$ のコンパクト複素空間 $X$ と big 線束 $L$ に対し、正曲率 current をもつ特異 Hermitian 計量 $h$ を適切に選ぶ。解消と $h$ の特異集合の log resolution を行うと、$p+q>n$ において、対数的微分形式、$\mathcal O(-E)$、$L$ の引き戻し、乗数イデアル $\mathcal I$ をテンソルしたコホモロジーが消滅する。

この結果は $X$ の射影性を仮定しない。big 線束の存在から $X$ が Moishezon であることを使い、特異 Hermitian 計量の非 ample な振る舞いを乗数イデアルと blowup によって補正する。

主要な正値性入力 Theorem 1.4 は、log resolution 上で $\pi^*L\otimes\mathcal I(\pi^*h)$ を例外因子の有理係数でさらに補正すると positive な $\mathbb Q$-line bundle になると述べる。この補正係数は因子的 Lelong 数の小数部分により制御される。

さらに $L$ が nef and big なら、乗数イデアルが自明になる計量を選び、より古典的な Steenbrink 型の式を得る（Theorem 1.5）。これは Kawamata--Viehweg 消滅に対応する方向の拡張である。

Introduction では、相対コンパクトな弱擬凸複素空間上の singular positive line bundle に対する相対版も後の Theorem 4.1 として予告される。本記事はこれらの証明を検証するものではなく、v1 の Abstract と Introduction に述べられた範囲を整理している。

## 論文の主要ポイント

- Steenbrink 消滅を ample 線束から compact complex space 上の big 線束へ拡張する（Theorem 1.3）。
- 対数的微分形式と乗数イデアル層により $p+q>n$ の消滅範囲を得る。
- 解消上で例外因子を有理係数補正した $\mathbb Q$-line bundle の正値性を示す（Theorem 1.4）。
- 元の空間の射影性を要求せず、big 線束から得られる Moishezon 性を利用する。
- nef and big の場合には乗数イデアルが自明な Steenbrink 型消滅を得る（Theorem 1.5）。

## 論文の構成

Section 2 で複素空間上の psh 関数、特異 Hermitian 計量、乗数イデアル、Lelong 数を準備する。後続節で正値性定理を証明し、それを用いてコンパクトおよび弱擬凸の設定の消滅定理を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.01519](https://arxiv.org/abs/2608.01519)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.5（主結果は 1.3–1.5）
- **論文構成の説明:** Introduction, pp. 1–3（結果と方法の概略）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
