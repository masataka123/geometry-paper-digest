---
layout: paper
title: "Constant scalar curvature Kähler metrics and semistable vector bundles"
title_ja: "定スカラー曲率Kähler計量と半安定ベクトル束"
authors: "Annamaria Ortu, Lars Martin Sektnan"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
arxiv_abstract: >-
  We give a necessary and sufficient condition for the projectivisation of a slope semistable vector bundle to admit constant scalar curvature Kähler (cscK) metrics in adiabatic classes, when the base admits a constant scalar curvature metric. More precisely, we introduce a stability condition on vector bundles, which we call adiabatic slope stability, which is a weaker version of K-stability and involves only test configurations arising from subsheaves of the bundle. We prove that, for a simple vector bundle with locally free graded object, adiabatic slope stability is equivalent to the existence of cscK metrics on the projectivisation, which solves a problem that has been open since work of Ross--Thomas. In particular, this shows that the existence of cscK metrics is equivalent to K-stability in this setting. We provide a numerical criterion for the Donaldson-Futaki invariant associated to said test configurations in terms of Chern classes of the vector bundle. This criterion is computable in practice and we present an explicit example satisfying our assumptions which is coming from a vector bundle that does not admit a Hermite-Einstein metric.
topic: differential-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - k-stability
  - csck-extremal-kahler-metrics
arxiv_id: "2406.08284v1"
arxiv_url: "https://arxiv.org/abs/2406.08284"
arxiv_submitted: "2024-06-12"
arxiv_updated: "2024-06-12"
summary: >-
  勾配半安定なベクトル束の射影化が断熱的Kähler類でcscK計量をもつための必要十分条件を与える。単純で次数付き対象が局所自由な束では、新しい「断熱的勾配安定性」がcscK計量の存在、さらにK安定性と同値になる。
abstract_en: ""
summary_en: >-
  This work characterizes constant-scalar-curvature Kähler metrics in adiabatic classes on projectivized semistable bundles. It introduces adiabatic slope stability, tested on degenerations induced by subsheaves, and proves an existence equivalence for simple bundles whose graded object is locally free. The result verifies the expected relation with K-stability in this setting and includes a computable Chern-class criterion.
abstract_ja: >-
  cscK基底上の勾配半安定ベクトル束を射影化し、断熱的Kähler類にcscK計量が存在するための必要十分条件を示す。部分層から生じるテスト配置だけを用いる断熱的勾配安定性を導入し、単純かつ次数付き対象が局所自由な束について存在性との同値を証明する。Donaldson–Futaki不変量をChern類で計算する数値的判定法と、Hermite–Einstein計量をもたない束から生じる例も与える。
abstract_source_url: "https://arxiv.org/abs/2406.08284"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2406.08284](https://arxiv.org/abs/2406.08284)
- **著者:** Annamaria Ortu, Lars Martin Sektnan
- **初回投稿日・最終更新日:** 2024年6月12日
- **主分類・副分類:** math.DG, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$E\to B$ を半安定ベクトル束とし、$X=\mathbf P(E)$ をその射影化とする。相対超平面束 $H=\mathcal O_{\mathbf P(E)}(1)$ と基底の偏極 $L$ から得る

$$
c_1(H)+k\pi^*c_1(L),\qquad k\gg 0,
$$

が断熱的Kähler類である。安定束の場合の存在結果と不安定束の場合の非存在結果の間で、真に半安定な場合が未解決であった。

論文は部分層が誘導するテスト配置のDonaldson–Futaki不変量を調べる「断熱的勾配安定性」を導入する。単純で次数付き対象が局所自由という滑らかさの仮定のもと、この安定性が全ての十分大きな $k$ におけるcscK計量の存在と同値になる。

これによりこの射影束の範囲でYau–Tian–Donaldson対応が確認される。また、Hermite–Einstein計量をもたない真に勾配半安定な束でも射影化がcscK計量をもつ具体例が得られる。

## 背景と問題設定

Hongの結果は勾配安定束に対して摂動法でcscK計量を構成し、Ross–Thomasは真に不安定な束の射影化が断熱極限でK不安定になることを示した。本論文は半安定束を次数付き対象の変形とみなし、無限次元のcscK方程式をKuranishi空間上の有限次元モーメント写像問題へ移す。

## 主結果

### 主定理（Theorem 1.1）

$E\to B$ は十分滑らかで単純な正則ベクトル束、$B$ は滑らかな射影多様体とする。$L$ に持ち上がる $B$ の自己同型群が離散的で、$B$ が $c_1(L)$ にcscK計量をもつと仮定する。このとき $X=\mathbf P(E)$ が全ての十分大きな $k$ に対して $c_1(H)+k\pi^*c_1(L)$ にcscK計量をもつことと、$X$ が $L$ に関して断熱的勾配安定であることは同値である。

### Yau–Tian–Donaldson対応（Corollary 1.2）

同じ仮定のもと、十分大きな $k$ に対してcscK計量の存在は $H+kL$ に関するK安定性と同値である。断熱的勾配安定性は部分層由来の特定のテスト配置だけを検査する弱い条件だが、ここでは完全な存在判定になる。

### 真に半安定な例（Corollary 1.3）

十分多くの点で $\mathbf P^2$ を爆発した曲面上に、真に勾配半安定でありながら、その射影化が全ての $k\gg0$ でcscK計量をもつ束が存在する。

## 証明の見取り図

半安定束をHermite–Einsteinな次数付き対象の変形としてKuranishi空間に置く。Dervan–Hallamの普遍族の理論により、スカラー曲率のコンパクト群のLie代数への射影を有限次元モーメント写像として扱う。断熱摂動でスカラー曲率そのものをこのLie代数へ入れた後、モーメント写像流を走らせる。極限の重みをDonaldson–Futaki不変量と結び、断熱的勾配安定性から軌道内の零点、したがってcscK計量を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2406.08284](https://arxiv.org/abs/2406.08284)
- **Introduction:** Section 1, pp. 1–6
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Corollaries 1.2–1.3
- **論文構成の説明:** Introduction “Outline”, p. 5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
