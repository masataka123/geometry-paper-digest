---
layout: paper
title: "Non-pluripolar products on vector bundles and Chern--Weil formulae"
title_ja: "ベクトル束上の非多重極積とChern--Weil公式"
authors: "Mingchen Xia"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
arxiv_abstract: >-
  In this paper, we develop several pluripotential-theoretic techniques for singular metrics on vector bundles. We first introduce the theory of non-pluripolar products on holomorphic vector bundles on complex manifolds. Then we define and study a special class of singularities of Hermitian metrics on vector bundles, called $\mathcal{I}$-good singularities, partially extending Mumford's notion of good singularities. Next, we derive a Chern--Weil type formula expressing the Chern numbers of Hermitian vector bundles with $\mathcal{I}$-good singularities in terms of the associated b-divisors. We also define an intersection theory on the Riemann--Zariski space and apply it to reformulate our Chern--Weil formula.
topic: algebraic-geometry
tags:
  - pluripotential-theory
  - vector-bundles-sheaves
  - chern-classes
  - algebraic-cycles-enumerative
arxiv_id: "2210.15342v4"
arxiv_url: "https://arxiv.org/abs/2210.15342"
arxiv_submitted: "2022-10-27"
arxiv_updated: "2024-02-22"
summary: >-
  特異Hermitian計量をもつ正則ベクトル束に非多重極積とChern類を構成し、$\mathcal I$-good特異性に対するChern–Weil公式を確立する。解析的なChernカレントをb因子およびRiemann–Zariski空間上の交叉理論と結び、混合Shimura多様体への算術交叉理論を見据えた枠組みを与える。
abstract_en: ""
summary_en: >-
  The article builds a pluripotential intersection theory for holomorphic vector bundles equipped with singular Hermitian metrics. It defines Segre and Chern currents through relative non-pluripolar products and singles out full-mass and $\mathcal I$-good singularities. For the latter class, analytic Chern integrals are related to intersection data encoded by b-divisors and by classes on the Riemann–Zariski space. This framework is intended to handle boundary behavior too singular for Mumford's good metrics, especially in prospective applications to mixed Shimura varieties.
abstract_ja: >-
  本論文はベクトル束上の特異計量に対する多重ポテンシャル論的手法を構築する。正則ベクトル束上の非多重極積を導入し、Mumfordのgood特異性を部分的に拡張する $\mathcal I$-good特異性を定義する。さらに、そのような計量をもつ束のChern数を付随するb因子で表すChern–Weil型公式を導き、Riemann–Zariski空間上の交叉理論として再定式化する。
abstract_source_url: "https://arxiv.org/abs/2210.15342"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2210.15342](https://arxiv.org/abs/2210.15342)
- **著者:** Mingchen Xia
- **初回投稿日:** 2022年10月27日
- **最終更新日:** 2024年2月22日
- **主分類・副分類:** math.AG（主分類）, math.CV, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかなコンパクト化の境界で特異になるHermitian計量について、Chern形式の積分を代数的交叉数としてどう解釈するかが中心問題である。Mumfordのgood計量は局所対称空間ではHirzebruch–Mumford比例定理を支えるが、混合Shimura多様体の自然な計量には特異性が強すぎる。

第一部は、Griffiths正な特異Hermitianベクトル束に対して相対非多重極積を使い、SegreカレントとChernカレントを定義する。特性類が古典的交叉理論に似た関手性を保つ枠組みを作り、full-mass計量と、それを緩めた $\mathcal I$-good計量を導入する。

第二部は特異計量に付随するb因子を用いる。準射影多様体のあらゆる射影的モデルを同時に扱うRiemann–Zariski空間に交叉理論を構成し、解析側の非多重極積と代数側の交叉数を比較する。

主要なChern–Weil公式は、$\mathcal I$-goodなGriffiths正ベクトル束について、解析的Chern多項式の積分をRiemann–Zariski空間上の代数的データで表す。これは混合Shimura多様体上の算術交叉理論やKudlaプログラムを拡張するための基礎として位置付けられる。

## 背景と問題設定

準射影多様体 $X$ 上のHermitianベクトル束 $\widehat E_i$ に対し、Chern多項式の積分をコンパクト化上の代数的データとして読むことがQuestion 0.1である。任意のGriffiths正特異性ではChernカレントがコホモロジーを正しく反映しない例があるため、特異性のクラスを制御する必要がある。

階数 $r+1$ の $\widehat E$ について $p:\mathbb P(E^\vee)\to X$ とし、$\mathcal O(1)$ の誘導特異計量を $\widehat{\mathcal O}(1)$ と書く。Segre作用素は

$$
s_i(\widehat E)\cap T=(-1)^i p_*\bigl(c_1(\widehat{\mathcal O}(1))^{r+i}\cap p^*T\bigr)
$$

と定義され、括弧内は相対非多重極積である。

## 主結果

### 高次Chern類の消滅（Theorem 0.2 / Corollary 5.24）

small unbounded locusをもちGriffiths正な $\widehat E$ と、それに横断的な閉dshカレント $T$ に対し、$i>\operatorname{rank}E$ なら

$$
c_i(\widehat E)\cap T=0
$$

となる。特異計量の下でも古典的Chern類の次数制約を回復する結果である。

### Full-mass Chern–Weil公式（Theorem 0.3 / Theorem 6.8）

nefな基礎束をもち、full massでGriffiths正な束 $\widehat E_1,\ldots,\widehat E_m$ を考える。次数 $n=\dim X$ の斉次Chern多項式 $P$ について、$P(c_i(\widehat E_j))$ は位相的な類 $P(c_i(E_j))$ を表す。

### b因子との比較（Theorem 0.7 / Theorem 10.13）

準射影多様体上のcompactifiableな正値特異Hermitian直線束 $\widehat L_1,\ldots,\widehat L_n$ が正のmassをもつとき、

$$
\bigl(D(\widehat L_1),\ldots,D(\widehat L_n)\bigr)
\geq
\int_X c_1(\widehat L_1)\wedge\cdots\wedge c_1(\widehat L_n)
$$

が成り立つ。全てが $\mathcal I$-goodなら等号が成立し、これが直線束版のChern–Weil公式となる。

### Riemann–Zariski空間上の公式（Theorem 0.8 / Corollary 11.13）

射影 $n$ 次元多様体上の $\mathcal I$-goodなGriffiths正ベクトル束 $\widehat E_j$ と次数 $n$ の斉次Chern多項式 $P$ に対して、Introductionの式 (0.2) は

$$
\int_{\mathfrak X}P\bigl(c_i(\widehat E_j)\bigr)
=
\int_XP\bigl(c_i(\widehat E_j)\bigr)
$$

を与える。左辺はRiemann–Zariski空間 $\mathfrak X$ 上の代数的交叉、右辺は非多重極積による解析的積分であり、両者を同一視する最終的な公式である。

## 証明の見取り図

まず射影束上の相対非多重極積からSegre作用素を作り、逆公式によりChernカレントを定義する。full-mass条件と乗数層の漸近量を比較して $\mathcal I$-good性を特徴付け、単調性を用いてChern–Weil公式を導く。

次に各双有理モデル上の特異性データをb因子へまとめ、そのnef性と体積を非多重極massに結び付ける。最後にRiemann–Zariski空間をpro-schemeとして扱い、$K$ 理論の $\gamma$-filtrationからChow型の交叉理論を構成することで、高階のChern類へ直線束の比較を拡張する。

## 原論文との対応

- **Abstractページ:** [arXiv:2210.15342](https://arxiv.org/abs/2210.15342)
- **Introduction:** Sections 0.1–0.6, pp. 1–8
- **Introduction中で言及された主要定理番号:** Theorems 0.2–0.10
- **論文構成の説明:** Sections 0.2–0.5, pp. 3–8
- **確認したarXivバージョン:** v4
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
