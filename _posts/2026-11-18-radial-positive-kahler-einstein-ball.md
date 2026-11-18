---
layout: paper
title: Radial symmetry for the positive Kähler--Einstein Dirichlet problem on the ball
title_ja: 球上の正のKähler–Einstein Dirichlet問題の動径対称性
authors: Hongyu Chen, Li Ma
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
- math.CV
arxiv_abstract: We prove radial symmetry for every strictly plurisubharmonic function $u$ on the unit ball in $\C^n$, $n\ge2$, that is smooth up to the boundary, vanishes there, and has complex Hessian determinant $μe^{-u}$ for a constant $μ>0$. The known Fubini--Study family therefore exhausts all such solutions. For the corresponding complex Monge--Ampère mean field equation, this establishes the Berman--Berndtsson symmetry conjecture in the smooth class and gives uniqueness throughout the known existence range. The classification also yields the sharp Moser--Trudinger inequality on the ball in Cegrell's finite-energy class.
topic: differential-geometry
tags:
- kahler-einstein-metrics
- monge-ampere-equations
- pluripotential-theory
arxiv_id: 2611.21007v1
arxiv_url: https://arxiv.org/abs/2611.21007
arxiv_submitted: '2026-11-16'
arxiv_updated: '2026-11-16'
summary: 複素単位球上で境界値を零とする正のKähler–Einstein方程式について、境界まで滑らかな狭義多重劣調和解がすべて動径対称であることを示す。明示解による分岐の分類と、正規化された平均場方程式の一意性、最良定数を持つMoser–Trudinger不等式を導く。
abstract_en: ''
summary_en: The Dirichlet problem on a complex ball connects positive Einstein geometry with nonlinear potential theory. This work determines the shape of its smooth strictly plurisubharmonic solutions and uses an explicit family to describe the parameter dependence. Normalizing the equation changes the multiplicity picture and yields a uniqueness statement. A sharp energy inequality is another consequence of the symmetry analysis.
abstract_ja: 正のKähler–Einstein計量を球の境界値問題として構成するとき、領域の対称性だけから解の対称性が従うとは限らない。本論文は滑らかな狭義多重劣調和解についてこの対称性を確立し、解を一つの実パラメータで記述する。非正規化方程式には二つの解が存在する範囲がある一方、平均場型の正規化では許容パラメータの全域で一意性が得られる。
abstract_source_url: https://arxiv.org/abs/2611.21007
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.21007v1](https://arxiv.org/abs/2611.21007)
- **著者:** Hongyu Chen, Li Ma
- **初回投稿日:** 2026-11-16
- **最終更新日:** 2026-11-16
- **主分類・副分類:** math.DG（主分類）; math.AP, math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素Monge–Ampère方程式は、Kählerポテンシャルから指定したRicci曲率の計量を作る方程式である。負または零の曲率の場合と異なり、正のKähler–Einstein方程式には解の多重性が現れ、対称な領域上でも一意性は自動的ではない。

本論文は複素次元 $n\ge2$ の単位球で、境界まで滑らかな狭義多重劣調和解が必ず動径対称になることを証明する。これによってすべての解を明示でき、右辺の係数が臨界値より小さいと二解、臨界値では一解、それを超えると解がないという構造が得られる。

さらに、全質量で正規化した平均場方程式では許容範囲内の解が一意になる。著者らはこの分類を用い、多重ポテンシャル論の有限エネルギー類上で、エネルギー係数と加法定数の双方が最良となるMoser–Trudinger不等式を導く。滑らかな解の対称性と、一般の弱解の一意性を混同してはならない。

## 背景と問題設定

単位球を $B\subset\mathbb C^n$ とする。対象は $u\in C^\infty(\overline B)$ が狭義多重劣調和で、$u|\_{\partial B}=0$ を満たす問題である。Berman–Berndtssonらによる存在論を背景に、正の曲率の場合の対称性と一意性が問われてきた。本論文の中心は、あらかじめ動径対称性を仮定せずにそれを導く点にある。

## 主結果

### すべての滑らかな解の分類（Theorem 1.1）

方程式 $\det(u\_{i\bar j})=\mu e^{-u}$ の上記の解は、ある $b>0$ によって

$$
u(z)=(n+1)\log\frac{1+b|z|^2}{1+b},\qquad
\mu=\frac{(n+1)^n b^n}{(1+b)^{n+1}}
$$

と書ける。従って $0<\mu<n^n/(n+1)$ ではちょうど二解、$\mu=n^n/(n+1)$ では一解、それより大きい $\mu$ では解が存在しない。「すべての解が対称である」という結果は、固定した $\mu$ に対する一意性とは異なる。

### 平均場型の正規化（Corollary 1.2）

$dd^c=\frac{i}{2\pi}\partial\bar\partial$、$dV\_0=\frac{n!}{\pi^n}dV$ と正規化する。正のパラメータ $\gamma$ に対する問題

$$
(dd^c\varphi)^n=
\frac{e^{-\gamma\varphi}}{\int\_B e^{-\gamma\varphi}dV\_0}\thinspace dV\_0,
\qquad \varphi|\_{\partial B}=0
$$

に滑らかな狭義多重劣調和解が存在するのは $0<\gamma<n+1$ のときに限る。その解は一意であり、

$$
\varphi(z)=\frac{n+1}{\gamma}\log\left(1-\frac{\gamma}{n+1}+\frac{\gamma}{n+1}|z|^2\right)
$$

で与えられる。

### 最良のMoser–Trudinger不等式（Corollary 1.3）

有限エネルギー類 $\mathcal E^1(B)$ の任意の $u$ について

$$
\log\int\_B e^{-u}dV\_0
\le \frac{1}{(n+1)^{n+1}}\int\_B(-u)(dd^cu)^n
+\sum\_{j=1}^n\frac1j
$$

が成り立つ。エネルギー項の係数と右辺の加法定数はともに最良である。解の分類を、滑らかな方程式の範囲を超えた変分的評価に結び付ける結果である。

## 証明の見取り図

Introductionの説明では、まずGreen型恒等式とPohozaev型恒等式によって質量と境界の法線微分を関連付ける。次に適切な動径解と比較し、計量に関する勾配ノルムから作る対数型補助関数の劣調和性を用いる。

境界項の制御から等号成立を引き出し、勾配に対応する正則ベクトル場の構造を通じて動径対称性に到達する。正規化問題の分類と最良不等式は、この対称性定理および明示解の性質を組み合わせて得られる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.21007)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.21007v1) — Section 1, Introduction, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem 1.1; Corollaries 1.2–1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.21007v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
