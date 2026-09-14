---
layout: paper
title: "Characteristic Classes of Adelic Vector Bundles and Applications"
title_ja: "アデール的ベクトル束の特性類とBogomolov--Gieseker不等式"
authors: "Jiahui Gao"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.NT
arxiv_abstract: >-
  We define numerical adelic characteristic classes for vector bundles on projective varieties over number fields. The metric data are carried by the tautological quotient line bundle on the associated projective bundle. The construction uses the established intersection theory of adelic line bundles. Higher characteristic classes are multilinear intersection functionals. They are continuous for simultaneously controlled model sequences that are Cauchy for the supremum norm. We construct the resulting tautological numerical intersection algebra. We also prove controlled numerical Bogomolov--Gieseker inequalities. We first treat the case of a curve over $K$, where the numerical inequality is combined with the Deligne pairing and the adelic Hodge index theorem. We then pass to higher dimension, using Moriwaki's model-level dimension induction before taking the controlled Zhang limit. The curve theorem includes equality and uniform-gap criteria.
topic: algebraic-geometry
tags:
  - chern-classes
  - vector-bundles-sheaves
  - stability
arxiv_id: "2609.12138v1"
arxiv_url: "https://arxiv.org/abs/2609.12138"
arxiv_submitted: "2026-09-10"
arxiv_updated: "2026-09-10"
summary: >-
  数体上の射影多様体にあるアデール的ベクトル束へ、射影化の普遍商直線束の交点数から数値的特性類を定義する。制御された算術模型の極限によりBogomolov--Gieseker型判別式の非負性を示し、曲線上ではDeligne pairingを用いて等号条件まで与える。
abstract_en: ""
summary_en: >-
  This work builds numerical characteristic classes for adelic vector bundles from intersection numbers of the tautological quotient line bundle. Under simultaneous control of arithmetic models, the resulting multilinear functionals are independent of the chosen approximations and fit into a numerical intersection algebra. Slope semistability then yields a nonnegative adelic discriminant. On curves with trivial determinant, a Deligne-pairing identity gives a nonpositive top tautological intersection and identifies its equality case.
abstract_ja: >-
  数体上の射影多様体におけるベクトル束について、付随する射影束上の普遍商直線束にアデール計量を入れ、その交点数から数値的Segre類、Chern類、Chern指標、Todd類を構成する。これらは同時制御された模型列に対して連続であり、得られる交点代数も構成される。さらに幾何学的ファイバーで勾配半安定な束に対する数値的Bogomolov--Gieseker不等式を証明する。曲線の場合にはDeligne pairingとアデール的Hodge指数定理から、等号条件と一様gapに関する精密化を得る。
abstract_source_url: "https://arxiv.org/abs/2609.12138"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.12138](https://arxiv.org/abs/2609.12138)
- **著者:** Jiahui Gao
- **初回投稿日:** 2026年9月10日
- **最終更新日:** 2026年9月10日
- **主分類・副分類:** math.AG（主分類）, math.NT
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

算術的交点理論ではHermitianベクトル束の特性類が知られているが、アデール計量を持つ束に対し、直線束の交点数だけからどこまで特性数を定義できるかが問題となる。本論文は射影束 $Y=\mathbb P_X(E)$ 上の普遍商直線束 $\xi_E=\mathcal O_Y(1)$ を用いてこの問題に答える。

数値的Segre類を出発点にChern類、Chern指標、Todd類を普遍多項式として定める。模型列に同時制御条件を課すことで極限の存在と模型からの独立性を確保し、異なる束の特性類も乗算できる非退化な数値的交点代数を構成する。

主要な応用はBogomolov--Gieseker型不等式である。幾何学的ファイバー上での勾配半安定性と、計量を近似する正則算術模型の条件のもとで、アデール的判別式が非負となる。

曲線上で行列式が自明な場合には、Deligne pairingの自己交点と判別式を結ぶ恒等式が得られる。これにアデール的Hodge指数定理を組み合わせ、普遍商直線束の最高次交点の非正値性と等号条件を特徴づける。

## 背景と問題設定

$K$ を数体、$X$ を次元 $d$ の射影整 $K$-多様体、$E$ を階数 $r>0$ のベクトル束とする。$Y=\mathbb P_X(E)$ とし、商直線をパラメータ化する規約で $\xi_E=\mathcal O_Y(1)$ に可積分アデール計量を入れる。数値的Segre類は例えば

$$
\left\langle\widehat{s}_i(\overline E),\overline L_1,\ldots,\overline L_{d+1-i}\mid X\right\rangle
=\widehat{\deg}_Y\!\left(\widehat c_1(\overline\xi_E)^{r-1+i}\prod_{j=1}^{d+1-i}\widehat c_1(\pi^*\overline L_j)\right)
$$

で定義される。核心は、算術模型で計算した交点数がアデール極限へ移るための制御条件を明示する点にある。

## 主結果

### 数値的特性類の構成（Theorem A / Theorem 1.22）

数値的特性汎関数は $\overline\xi_E$ のみに依存してwell-definedであり、組み合わせるアデール直線束について対称かつ多重線形である。同時制御条件を満たす模型評価は模型の選び方によらない極限へ収束し、有限正規化基底変換公式と生成有限射影公式を満たす。すべての関連直線束がnefならSegre単項式数は非負となる。

### アデール的判別式不等式（Theorem B / Theorems 3.11 and 4.4）

$E_{\overline K}$ が $L_{\overline K}$ に関して勾配半安定で、$(\overline L,\overline\xi_E)$ がDefinition 3.1の模型系を持つなら、論文で定義されるtautological discriminantは

$$
\Delta^{\tau}_{\overline L}(E,\overline\xi_E)\geq 0
$$

を満たす。これは模型レベルの算術的不等式を、制御されたZhang極限へ移した結論である。

### 曲線上の等号条件（Theorem C / Theorem 3.14）

さらに $X=C$ が曲線で $\det E\simeq\mathcal O_C$ とする。$\overline A=\langle\overline\xi_E,\ldots,\overline\xi_E\rangle_{Y/C}$ と置けば

$$
\overline\xi_E^{\,r+1}=\frac{r+1}{2r}\overline A^2-\frac{1}{2r}\Delta_C^\tau(E,\overline\xi_E)\leq0.
$$

左辺が0であることは、$\overline A^2$ と $\Delta_C^\tau$ がともに0であることと同値である。

## 証明の見取り図

正則算術模型上で、Mourouganeの計算によりtautological Segre類と補正済み算術特性類を比較する。個々の類に現れるBott--Chern補正は判別式の最初の二項で相殺され、Moriwakiの不等式を適用できる算術的判別式次数へ帰着する。固定したnef分解を使って模型からアデール極限へ移る。曲線の場合は $A=\det E$ とDeligne pairingを同定し、$\deg A=0$ に対するアデール的Hodge指数定理を用いる。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.12138](https://arxiv.org/abs/2609.12138)
- **Introduction:** 冒頭のIntroduction
- **Introduction中で言及された主要定理番号:** Theorem A（Theorem 1.22）, Theorem B（Theorems 3.11 and 4.4）, Theorem C（Theorem 3.14）
- **論文構成の説明:** Introduction末尾
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
