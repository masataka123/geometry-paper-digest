---
layout: paper
title: Uniqueness of scalar-flat ALE Kähler metrics
title_ja: Scalar-flat ALE Kähler計量の一意性
authors: Qi Yao
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We study uniqueness of scalar-flat K\"ahler metrics in a fixed K\"ahler class on an asymptotically locally Euclidean (ALE) K\"ahler manifold, assuming only differentiated $o(1)$ decay to a fixed Euclidean metric on the end. In complex dimension $n\geq2$, under suitable polynomial decay of the reference metric, we prove that the relative Mabuchi functional is finite, continuous, and convex along weak geodesics whose endpoint potentials satisfy $u=O(r^{-\gamma})$, $\gamma>2n-4$, together with the corresponding derivative estimates. Combining this convexity with the analysis of the Lichnerowicz operator in weighted spaces, we obtain uniqueness by a perturbation argument. Decay improvement and comparison of the asymptotic charts produce a global potential with the required decay for the difference of the two cohomologous scalar-flat K\"ahler forms. The argument also extends to asymptotically conical K\"ahler metrics approaching a fixed Ricci-flat K\"ahler cone under prescribed
  decay assumptions.
topic: differential-geometry
tags:
- noncompact-kahler-geometry
- csck-extremal-kahler-metrics
- pluripotential-theory
arxiv_id: 2611.03736v1
arxiv_url: https://arxiv.org/abs/2611.03736
arxiv_submitted: '2026-11-01'
arxiv_updated: '2026-11-01'
summary: 同じKähler類と無限遠でのEuclidean計量を共有するscalar-flat ALE Kähler計量の一意性を示す。無限体積上で相対Mabuchi汎関数の有限性・連続性・凸性を確立し、重み付きLichnerowicz方程式と組み合わせる。ALEの場合には微分を含むo(1)漸近条件まで仮定を弱める。
abstract_en: ''
summary_en: The uniqueness problem on an ALE space includes a boundary condition at infinity as well as a Kähler class. Yao develops a relative Mabuchi functional for weak geodesics whose endpoint potentials decay sufficiently fast. Entropy control at infinity and a weighted perturbation argument lead to uniqueness of scalar-flat metrics. Decay improvement allows the ALE conclusion under differentiated o(1) asymptotics, whereas the conical extension retains explicit polynomial decay assumptions.
abstract_ja: 非コンパクトKähler多様体では、同じコホモロジー類という条件に加え、無限遠で何を固定するかが一意性を左右する。本論文はscalar-flat ALE計量について、共通のEuclidean漸近モデルの下で一意性を示す。減衰する端点ポテンシャルを結ぶ弱測地線上で相対Mabuchi汎関数を構成し、無限遠へのエントロピー損失を排除して凸性を得る。Ricci-flat coneへ近づくAC計量にも、指定された減衰条件の下で同様の議論を適用する。
abstract_source_url: https://arxiv.org/abs/2611.03736
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.03736v1](https://arxiv.org/abs/2611.03736)
- **著者:** Qi Yao
- **初回投稿日:** 2026-11-01
- **最終更新日:** 2026-11-01
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトKähler多様体の定スカラー曲率計量では、Mabuchi汎関数の凸性が一意性の重要な道具となる。非コンパクトなALE多様体でも同じ考えを使いたいが、体積が無限であるため汎関数の積分が収束するとは限らない。本論文はこの障害を扱い、scalar-flat Kähler計量の一意性を示す。

扱う計量は、固定した複素多様体上で同じKähler類に属し、無限遠では同じEuclidean計量へ近づく。まず多項式的な減衰を仮定し、減衰する端点ポテンシャルの間の弱測地線上で相対Mabuchi汎関数の有限性・連続性・凸性を確立する。

その凸性と重み付きLichnerowicz方程式を使った摂動から、二つのscalar-flat計量が一致することを得る。ALEの場合には既存の減衰改善定理を組み合わせ、十分多くの微分を含むo(1)の漸近条件まで仮定を弱める。

Ricci-flat Kähler coneに漸近するAC計量への拡張もある。ただしACの場合にはALEと同じ減衰改善を自動的に期待できず、指定された多項式減衰を残す。無限遠のモデルを固定することが結論の不可欠な一部である。

## 背景と問題設定

複素次元$n\geq2$の連結完備Kähler多様体$X$のendを$(\mathbb C^n\setminus\overline B)/\Gamma$と同一視する。参照計量について、十分大きい$k$と$\delta>n-1$に対し

$$
|\nabla\_{\mathrm{euc}}^j(g-g\_{\mathrm{euc}})|\_{g\_{\mathrm{euc}}}=O(r^{-\delta-j})\qquad(0\leq j\leq k)
$$

を仮定し、スカラー曲率は$L^1$とする。ポテンシャルの空間$\mathcal H\_{-\gamma}$には

$$
|\nabla^j u|=O(r^{-\gamma-j}),\qquad\gamma>2n-4
$$

を課す。

$\omega\_u=\omega+dd^cu$、$f\_u=\omega\_u^n/\omega^n$とおき、無限の背景体積の寄与を差し引いた相対エントロピーを

$$
\operatorname{Ent}\_{\mathrm{rel}}(u)=\int\_X(f\_u\log f\_u-f\_u+1)\omega^n
$$

と定義する。相対Mabuchi汎関数は

$$
\mathcal M(u)=\operatorname{Ent}\_{\mathrm{rel}}(u)-nE\_{\operatorname{Ric}(\omega)}(u),\qquad
E\_\rho(u)=\frac1n\sum\_{j=0}^{n-1}\int\_Xu\thinspace \rho\wedge\omega\_u^{n-1-j}\wedge\omega^j
$$

である。弱測地線の複素Hessianには端点と同じ減衰が保たれるとは限らないため、滑らかな端点で積分が収束することだけでは十分でない。

## 主結果

### 弱測地線上の有限性（Theorem A）

上のALE幾何の仮定の下で、$u\_0,u\_1\in\mathcal H\_{-\gamma}$を結ぶ弱測地線$u\_t$に対し、$\mathcal M(u\_t)$はすべての$t\in[0,1]$で有限に定義される。無限体積の問題を解消し、変分法の対象として使えることを保証する。

### 連続性と凸性（Theorem B）

同じ仮定で$t\mapsto\mathcal M(u\_t)$は閉区間上連続かつ凸である。極限の下半連続性だけでなく、内部時刻でのエントロピー収束と無限遠への損失の排除が必要になる点が非コンパクトの場合の核心である。

### Scalar-flat計量の一意性（Theorem C）

同じ複素多様体上のscalar-flat ALE Kähler形式$\omega\_0,\omega\_1$が、共通のEuclidean計量へ上記の$\delta>n-1$の速さで近づくとする。このとき

$$
[\omega\_0]=[\omega\_1]\quad\Longrightarrow\quad\omega\_0=\omega\_1
$$

である。共通の無限遠の条件とコホモロジー類により、大域的な差ポテンシャルを必要な減衰空間に置けることが凸性との接点になる。

### 微分を含むo(1)条件（Corollary D）

ALEの場合は、十分大きい$k$に対して

$$
|\nabla\_{\mathrm{euc}}^j(g\_i-g\_{\mathrm{euc}})|\_{g\_{\mathrm{euc}}}=o(r^{-j})\qquad(i=0,1,\ 0\leq j\leq k)
$$

という共通の漸近条件でも、同じ類の完備scalar-flat Kähler形式は一致する。これはAché–Viaclovskyの減衰改善を使った系であり、単に微分のない点ごとの計量差だけを仮定した結果ではない。

### Ricci-flat coneへの拡張（Corollary E）

滑らかなコンパクトlinkをもつ固定Ricci-flat Kähler coneに、一つの固定した同一視で漸近するAC多様体でも、$\delta>n-1$の多項式減衰と参照スカラー曲率の可積分性の下で、相対Mabuchi汎関数の有限性・連続性・凸性を得る。同じconeと同一視に関してこの減衰をもつ、同じ類のscalar-flat形式は一致する。AC設定での最適な減衰条件は扱っていない。

## 証明の見取り図

端点ポテンシャルを切り取り、コンパクト台をもつ端点間の弱測地線で近似する。局所的な凸性は利用できるが、一様なポテンシャル収束だけではエントロピー収束は従わない。rooftop envelopeの記述でコンパクト部分の密度を比較し、無限遠の寄与には重み付き評価と局所化した凸性を使う。

近似エネルギー極限と真のエネルギーとの差を非負の欠損関数として捉えると、その凸性と端点での消滅から欠損が零になる。最後にLichnerowicz方程式を重み付き空間で解き、コンパクト台をもつ摂動の誤差を制御して、一意性へ進む。弱測地線のHessianに証明されていない減衰を仮定しないことが重要である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.03736)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.03736v1) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems A–C; Corollaries D–E
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.03736v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
