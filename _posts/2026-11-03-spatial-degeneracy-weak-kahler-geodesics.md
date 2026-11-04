---
layout: paper
title: Spatial degeneracy along weak geodesics in the space of Kähler potentials
title_ja: 弱Kähler測地線で起こる空間方向の退化
authors: Xia Xiao, Qi Yao
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: 'We study spatial Hessian degeneracy along weak K\"ahler geodesics. We construct examples in three settings: (1) On every compact K\"ahler manifold, the spatial form degenerates on a nonempty open set during an interior time interval, although both endpoints are smooth and strictly K\"ahler. (2) On ALE K\"ahler manifolds with a holomorphic quotient end and a decaying potential to the Euclidean metric, spatial degeneracy occurs on open regions arbitrarily far along an unbounded horn. (3) For cone and Poincar\''e endpoint metrics along a smooth divisor, normal spatial degeneracy occurs on open sets approaching the divisor. Both cone endpoints retain the prescribed angle. The first construction answers negatively the spatial-positivity question recorded in Darvas''s survey. The ALE and divisor constructions show that weak geodesics need not preserve the asymptotic behavior of the endpoint metrics.'
topic: differential-geometry
tags:
- pluripotential-theory
- monge-ampere-equations
- noncompact-kahler-geometry
arxiv_id: 2611.00744v1
arxiv_url: https://arxiv.org/abs/2611.00744
arxiv_submitted: '2026-10-31'
arxiv_updated: '2026-10-31'
summary: 端点が厳密なKähler計量でも、弱測地線の中間で空間方向の階数が落ちる例を構成する。任意のコンパクトKähler多様体での局所的反例に加え、所定のALE端や滑らかな因子に沿う錐・Poincaré計量でも漸近形が保存されないことを示す。
abstract_en: ''
summary_en: The constructions separate smoothness of a weak potential from positivity of its spatial Hessian. They produce smooth, stationary patches inside geodesics with strictly positive endpoints. The compact examples can be localized in a prescribed open set. Related constructions at infinity and near divisors show that endpoint asymptotics alone do not control the intermediate spatial metric.
abstract_ja: 滑らかで厳密に正の端点を結ぶ弱Kähler測地線が、中間時刻の開領域で空間方向に退化しうることを示す。コンパクトな場合は任意のKähler多様体上に例を作れる。所定のALE端では無限遠の開集合で、錐・Poincaré型の端点では滑らかな因子へ近づく領域で階数が落ちる。端点の急速な減衰や錐角の一致だけでは、中間計量の正定値性や漸近形は保証されない。
abstract_source_url: https://arxiv.org/abs/2611.00744
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.00744v1](https://arxiv.org/abs/2611.00744)
- **著者:** Xia Xiao, Qi Yao
- **初回投稿日:** 2026-10-31
- **最終更新日:** 2026-10-31
- **主分類・副分類:** math.DG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

弱Kähler測地線のポテンシャルには一般に $C^{1,1}$ 正則性が知られている。しかし、これは空間方向の計量が一様に正であることを意味しない。本論文は、厳密に正の端点を結んでも、中間で空間方向の階数が落ちる例を構成する。

コンパクトな場合には任意のKähler多様体で構成でき、端点の摂動を任意に指定した開集合に支えさせられる。退化する部分では弱解そのものは滑らかで時刻に依存しない。従って問題は単なるポテンシャルの非滑らかさではない。

非コンパクトなALE端や、滑らかな因子に沿う錐・Poincaré型計量にも構成を拡張する。端点での強い減衰や幾何学的な漸近条件が、中間時刻の正定値性を自動的に保存しないことが主題である。

## 背景と問題設定

$\Sigma=\lbrace 1<|\tau|<e\rbrace $、$t=\log|\tau|$ として、弱測地線は

$$
(\pi\_X^\ast \omega+i\partial\bar\partial U)^{n+1}=0,
\qquad \pi\_X^\ast \omega+i\partial\bar\partial U\geq0
$$

を端点境界条件のもとで解く。時空全体の行列式が零であることと、空間部分 $\omega+i\partial\_X\bar\partial\_Xu\_t$ が退化することは異なる。本論文が否定するのは、滑らかで正の端点から一様な下界 $\omega+i\partial\_X\bar\partial\_Xu\_t\geq\varepsilon\omega$ が従うという期待である。

## 主結果

### 任意のコンパクトKähler多様体での退化（Theorem A）

複素次元 $n\geq1$ の任意のコンパクトKähler多様体で、滑らかで正の端点 $u\_0,u\_1$ を選び、すべての $0<\delta<1/2$ に対し非空開集合 $U\_\delta$ 上で

$$
\operatorname{rank}(\omega+i\partial\_X\bar\partial\_Xu\_t)=n-1
\quad(t\in[\delta,1-\delta])
$$

とできる。同じ端点対がすべての $\delta$ に使え、その領域の近傍では解が滑らかかつ時刻に依存しない。端点は任意の指定非空開集合内にコンパクトな台を持つ非負関数として選べる。

### ALE端の無限遠での退化（Theorem B）

端が正則に $(\mathbb C^n\setminus\overline B)/\Gamma$ と同型で、被覆上で

$$
\omega=\omega\_0+i\partial\bar\partial\psi,
\quad\omega\_0=i\partial\bar\partial|z|^2,
\quad D^k\psi=O(r^{-\sigma-k}),\quad\sigma>0
$$

となる完備Kähler多様体を考える。端点は $\lambda\omega\leq\omega+i\partial\bar\partial u\_j\leq\Lambda\omega$ と同様の減衰を満たしながら、任意のコンパクト集合の外で、$t=1/2$ を含む時間区間に階数 $n-1$ の開領域を持つよう選べる。

端点は $u\_j=-\psi+s\_j$、$D^ks\_j=O(r^{-N})$（すべての $k,N$）という形を取る。特にEuclid空間では端点をSchwartz関数にでき、それでも中間Hessianは無限遠でEuclid計量へ収束するとは限らない。

### 錐因子近くの法方向退化（Theorem C）

コンパクトKähler多様体、非空滑らかな因子 $E$、$0<\beta<1$ を固定する。指定した因子上の点の近くで、錐角 $2\pi\beta$ を持つ背景と、それに一様同値な端点を構成できる。中間では局所座標 $E=\lbrace z=0\rbrace $ において

$$
\omega+i\partial\_X\bar\partial\_X\varphi\_t
=\lambda\_0 i\sum\_{\alpha=1}^{n-1}dw\_\alpha\wedge d\bar w\_\alpha,
\qquad\lambda\_0>0
$$

となる。法方向 $\partial/\partial z$ が零方向となり、全ポテンシャルは因子をまたいで滑らかになる。この構成では背景・端点が指定時間幅 $\delta$ に依存してよい。

### Poincaré端での退化（Theorem D）

滑らかな因子を除いた空間に、完備Poincaré背景 $\omega\_P$ とそれに一様同値な端点を構成する。因子への接近を測る $s\sim-\log|z|$ に対して

$$
|\nabla\_{\omega\_P}^ku\_j|\_{\omega\_P}=O(s^{-N})
$$

がすべての $k,N$ で成り立っても、因子へ近づく開集合で中間計量の階数が $n-1$ となる。退化の時間区間は接近とともに縮んでよいが、各区間は $1/2$ を含む。

## 証明の見取り図

端点のrooftop包絡が指定領域で退化するよう構成する。境界での接触と調和測度を使い、弱測地線が正の時間区間でその包絡に一致することを強制する。

最初のモデルを $\mathbb P^1$ や局所座標内で作り、正則曲線に沿った比較と貼り合わせで高次元へ移す。ALE端では参照ポテンシャルを変更し、因子の場合には法方向のモデルへ適用する。小さい大域摂動に対する既知の正値性結果とは、その小ささの仮定が異なる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.00744)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.00744v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems A–D
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.00744v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
