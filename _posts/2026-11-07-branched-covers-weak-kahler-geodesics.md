---
layout: paper
title: Branched Covers and Fiberwise Degeneration along Weak Kähler Geodesics
title_ja: 弱Kähler測地線で時空間階数を保ったまま起こるファイバー退化
authors: Wenjiong Guo, Zekun Sheng
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: On the projective line, we construct a pair of smooth K\"ahler potentials whose weak geodesic has isolated quadratic zeros of the fiber form at two fixed points throughout an interior time interval. The geodesic is smooth near these zeros, and its space-time form has constant rank one there. For the same fixed endpoints, the minimum fiber eigenvalue of the nondegenerate Monge-Amp\`ere approximations tends to zero, answering AIMPL Problem 2.5 in the negative. The construction works on every compact connected Riemann surface with a prescribed K\"ahler form and realizes any positive even order of vanishing. Taking products yields higher-dimensional examples in which the fiber rank drops by one along a smooth hypersurface while the space-time form retains maximal rank nearby. The proof starts from a semipositive model built from a branched cover. We make its endpoints strictly positive by local corrections and use comparison along holomorphic curves to prove that the weak geodesic
  still agrees with the model on an explicit interior region. There a ramification point of local degree $m$ gives a fiber zero of order exactly $2m-2$.
topic: differential-geometry
tags:
- monge-ampere-equations
- pluripotential-theory
- positivity
arxiv_id: 2611.07451v1
arxiv_url: https://arxiv.org/abs/2611.07451
arxiv_submitted: '2026-11-05'
arxiv_updated: '2026-11-05'
summary: 滑らかなKähler端点を結ぶ弱測地線について、全空間の形式が最大階数を保ちながら空間方向だけが退化する例を構成する。射影直線上の二次零点から一般のコンパクトRiemann面と高次元の直積へ拡張し、非退化近似の一様正値下界も否定する。
abstract_en: ''
summary_en: A weak Kähler geodesic is governed by a form on space-time, but positivity on each spatial slice is a different issue. The paper constructs fixed smooth endpoints for which these two ranks separate near branch points. The local fiber degeneration can have any prescribed positive even order on a compact Riemann surface. For the same endpoints, elliptic approximations lose every positive lower bound that is uniform in the approximation parameter.
abstract_ja: 射影直線上で、滑らかで厳密にKählerな二つの端点を結ぶ弱測地線が、内部時間区間を通じて二つの固定点でファイバー形式の二次零点をもつ例を作る。その近傍では測地線は滑らかで、時空間形式の階数は一のままである。分岐被覆を用いて任意のコンパクト連結Riemann面へ拡張でき、正の偶数次数の零点を実現する。同じ端点に対する非退化Monge–Ampère近似では、ファイバー方向の最小固有値が零へ近づく。
abstract_source_url: https://arxiv.org/abs/2611.07451
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.07451v1](https://arxiv.org/abs/2611.07451)
- **著者:** Wenjiong Guo, Zekun Sheng
- **初回投稿日:** 2026-11-05
- **最終更新日:** 2026-11-05
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kählerポテンシャルの空間の弱測地線は、空間と時間を合わせた領域上の退化Monge–Ampère方程式として表される。そこで全体の形式が最大階数をもつことと、各時刻の空間上で計量が正値であることは別の条件である。本論文は、その差を明確に示す具体例を構成する。

射影直線上では、両端のポテンシャルが滑らかで厳密にKählerであっても、測地線の内部で二つの固定点のファイバー形式が零になる。しかもその近傍で測地線自体は滑らかであり、時空間形式の階数も最大の一を保つ。単に正則性が失われたために退化する例ではない。

同じ構成を分岐被覆によって一般のコンパクトRiemann面へ移し、零点の次数も調整できる。また同じ端点を固定した非退化方程式の近似解は、近似パラメータによらないファイバー方向の正の下界をもたない。これはAIMPL Problem 2.5で求められていた反例を与える。

## 背景と問題設定

$A=\lbrace 1<|\tau|<e\rbrace $、$t=\log|\tau|$ とし、$U(x,\tau)=u\_t(x)$ と書く。$dd^c=\sqrt{-1}\partial\bar\partial$ の規約で、複素 $n$ 次元Kähler多様体上の弱測地線は

$$
\Omega\_U=\operatorname{pr}\_X^\ast \omega+dd^cU\geq0,\qquad
\Omega\_U^{n+1}=0,\qquad U|\_{|\tau|=e^j}=u\_j\ (j=0,1)
$$

を満たす。比較する二つの階数は、$\Omega\_U$ の階数と、$\omega+dd\_X^cu\_t$ の階数である。

滑らかなKähler端点から得られる弱測地線に、$\omega+dd\_X^cu\_t\geq\varepsilon\omega$ という一様正値性があるかが問題となる。既存の反例では全形式の階数も低下する領域が現れたのに対し、本論文は全形式の最大階数を保持する退化を扱う。

## 主結果

### 射影直線上の二次退化（Theorem 1.1）

$X=\mathbb P^1$、$\omega=2\omega\_{\mathrm{FS}}$ には、滑らかで厳密にKählerな端点 $u\_0,u\_1$ があり、その弱測地線は $t\in[1/4,3/4]$ の間、$0$ と $\infty$ の近傍で滑らかとなる。全形式 $\Omega\_U$ の階数はそこで一であるが、ファイバー形式は両点で零になる。

それぞれの局所座標 $\xi=z,1/z$ で、正確な零点の形は

$$
\omega+dd\_X^cu\_t=
\left(\frac{16e^{2t}}{(1+e^{2t})^2}|\xi|^2+O(|\xi|^4)\right)
\sqrt{-1}\thinspace d\xi\wedge d\bar\xi
$$

であり、時間区間上で一様である。空間方向が全形式の核になることと、全形式の階数そのものが落ちることが異なると分かる。

### 非退化近似に一様下界がない（Corollary 1.2）

同じ端点に対し、$\theta=\operatorname{pr}\_X^\ast \omega$、$\chi=\theta+\sqrt{-1}d\tau\wedge d\bar\tau$ と置いた

$$
(\theta+dd^cU\_\delta)^{n+1}=\delta\chi^{n+1},\qquad
\theta+dd^cU\_\delta>0
$$

の滑らかな解は、十分小さい $\delta>0$ で一意に存在し、$U\_\delta\to U$ と一様収束する。$t\in[1/4,3/4]$ を固定し、$0$ または $\infty$ を中心とする十分小さい閉円板 $K$ で

$$
\omega+dd\_X^cU\_\delta(\cdot,e^t)=\lambda\_{\delta,t}\omega
$$

と書くと、$\min\_K\lambda\_{\delta,t}\to0$ となる。端点を変えずに起こる現象であり、$\delta$ に独立な正の下界は存在しない。

### 一般の曲線と高次元への拡張

Introductionが説明するTheorem 5.1とCorollary 5.5では、任意のコンパクト連結Riemann面と指定されたKähler形式に対して構成を行う。分岐被覆の局所次数が $m$ の点では、共通の内部時間区間にファイバー形式が正確に $2m-2$ 次で消える。被覆を選ぶことで任意の正の偶数次数を実現できる。

積 $C\times Y$ では、$n=\dim\_{\mathbb C}(C\times Y)$ とすると、分岐点 $p$ に対応する滑らかな超曲面 $\lbrace p\rbrace \times Y$ 上で空間方向の階数が $n-1$ となり、その近傍で全形式の階数は $n$ を保つ（Corollary 6.4）。一般の全ての高次元Kähler多様体でこの構成を行うという主張ではない。

## 証明の見取り図

まず分岐被覆から半正値な明示的モデルを作る。モデルの退化は端点にも存在するため、そのままでは求めるKähler端点にならない。そこで分岐点の近傍だけに非負の補正を加え、端点を厳密に正にする。

端点の変更が局所的であることだけでは、内部の測地線が元のモデルと一致するとは言えない。論文は、モデルの全形式が消える適切な境界付き正則曲線上で比較原理を使う。非負補正から一方の大小関係を得て、境界で補正が消える曲線上の最大値原理から逆向きの不等式を得ることで、内部領域での完全な一致を示す。

近似解に一様な正の下界があれば、その下界はカレントの極限でも保たれる。しかし極限の滑らかなファイバー形式には零点があるため矛盾する。これが非退化近似に関する系の仕組みである。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.07451)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.07451v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1; Corollary 1.2; Introductionで説明されたTheorem 5.1とCorollaries 5.5, 6.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.07451v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
