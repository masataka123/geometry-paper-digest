---
layout: paper
title: 'Finite Time Noncollapsing Kähler-Ricci Flow: Gaussian Type Heat Kernel, Gromov-Hausdorff Limits'
title_ja: 有限時間非崩壊Kähler–Ricci flowの熱核と一意な距離極限
authors: Lei Zhang, Zhenlei Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: In this paper, we study heat kernel estimates along the K\"ahler-Ricci flow with finite time noncollapsing singularities over a compact K\"ahler manifold. The starting point is the type-II scalar-curvature estimate, which gives the natural parabolic scale $r\lesssim T-t$ near the singular time. By combining the distance distortion and space-time cut-off estimates of Bamler--Zhang with entropy, mean-value inequality, and conjugate heat-kernel estimates, we obtain two-sided Gaussian bounds and gradient bounds that are uniform on this scale. Under the global type-I scalar-curvature estimate, the same estimates hold on every scale. We then use these estimates and the monotonicity of the $W_1$-distance between conjugate heat flows to construct a canonical singular-time pseudo-distance. The distances $d_t$ (induced by $\omega(t)$) converge uniformly to this pseudo-distance. Its metric quotient is the unique Gromov--Hausdorff limit. Finally, we apply Bamler's theory and the recent
  work of Hallgren--Zhang to obtain the following. Every fixed-base-point type-I blow-up admits a subsequential metric-flow limit whose time slices are singular shrinking K\"ahler--Ricci soliton spaces with normal complex-analytic and log-terminal structure, unique tangent cones, and a polarized Fano fibration. For moving base points, the limiting metric flow, equipped with its limiting conjugate heat flow, is a metric soliton precisely under an entropy-pinching condition.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- metric-limits
- singularities
- fano-varieties
- curvature
arxiv_id: 2610.21824v1
arxiv_url: https://arxiv.org/abs/2610.21824
arxiv_submitted: '2026-10-15'
arxiv_updated: '2026-10-15'
summary: 有限時間に非崩壊特異点を生じるコンパクトKähler–Ricci flowについて、熱核のGaussian評価と特異時刻の距離極限を研究する。曲率評価に応じた尺度を区別し、距離の一様収束とGromov–Hausdorff極限の一意性、固定基点のblow-up極限の特異縮小ソリトン構造を示す。
abstract_en: ''
summary_en: The analysis concerns a compact Kähler flow approaching a finite singular time while its limiting class retains positive volume. Heat kernels provide control that remains useful despite scalar-curvature blow-up. The authors construct a limiting pseudo-distance and identify the resulting metric quotient without assuming a uniform two-sided distance estimate. Their description of rescaled limits uses the distinction between fixed and moving base points.
abstract_ja: 有限時間非崩壊Kähler–Ricci flowに対して、type-IIスカラー曲率評価から短い放物型尺度で熱核と勾配を制御する。type-I評価があれば時間差の制限を取り除ける。共役熱流のWasserstein単調性などを用いて距離の一様極限を構成し、その距離商を一意なGromov–Hausdorff極限として同定する。固定基点でのtype-I blow-upには、log terminalな複素解析構造と偏極Fanoファイブレーションを持つ特異縮小Kähler–Ricciソリトンが現れる。
abstract_source_url: https://arxiv.org/abs/2610.21824
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.21824v1](https://arxiv.org/abs/2610.21824)
- **著者:** Lei Zhang, Zhenlei Zhang
- **初回投稿日:** 2026-10-15
- **最終更新日:** 2026-10-15
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler–Ricci flowが有限時間で特異になるとき、曲率は発散しても距離空間としての極限を理解できるかが問題となる。本論文は、極限のコホモロジー類がnefかつbigである非崩壊の場合を扱い、熱核評価から距離極限へ進む方法を提示する。

まずスカラー曲率のtype-II評価を使い、特異時刻までの残り時間に応じて小さくなる尺度で、距離の変動、cut-off関数、熱核のGaussian上下界を制御する。より強いtype-Iスカラー曲率評価があれば、熱核評価は全ての時間差に拡張できる。Introductionは、このtype-I評価自体が最近のJian–Songの研究によって一般に確立されたことを明記する。

距離関数は特異時刻に向けて一様に擬距離へ収束し、距離ゼロの点を同一視した商が一意なGromov–Hausdorff極限となる。さらに固定基点で拡大した極限は、特異縮小Kähler–Ricciソリトンの時間断面であり、複素解析的な特異点構造とFanoファイブレーションを持つ。

## 背景と問題設定

複素次元$n$のコンパクトKähler多様体上で

$$
\frac{\partial\omega}{\partial t}=-\operatorname{Ric}(\omega),\qquad
\omega(0)=\omega\_0,\qquad
T=\sup\lbrace t>0:[\omega\_0]-2\pi t c\_1(X)>0\rbrace <\infty
$$

を考える。非崩壊条件は、$\alpha=[\omega\_0]-2\pi T c\_1(X)$について$\int\_X\alpha^n>0$となることである。$d\_t$を流れに対応する距離、$H(x,t;y,s)$を熱核とする。

type-IIスカラー曲率評価$R\le C/(T-t)^2$では自然な空間尺度は$r\lesssim T-t$である。一方、type-I評価$R\le C\_0/(T-t)$なら$r\lesssim\sqrt{T-t}$まで拡大する。ここでのtype-I条件はスカラー曲率の条件であり、曲率テンソル全体のtype-I評価と混同しない。

## 主結果

### 距離の局所変動（Theorem 1.1）

$0<r\_0\le\min\lbrace \sqrt{t\_0},c\_0(T-t\_0)\rbrace $、$d\_{t\_0}(x\_0,y\_0)\ge r\_0$のとき、$|t-t\_0|\le\alpha\_0r\_0^2$で

$$
\alpha\_0 d\_{t\_0}(x\_0,y\_0)<d\_t(x\_0,y\_0)<\alpha\_0^{-1}d\_{t\_0}(x\_0,y\_0)
$$

が成立する。定数$0<\alpha\_0<1,c\_0>0$は初期データと次元に依存する。type-Iスカラー評価の下では$r\_0\le\min\lbrace \sqrt{t\_0},c\_0\sqrt{T-t\_0}\rbrace $まで同様の結論が成立する。

### Cut-off関数（Theorem 1.3）

同じ局所尺度で、$0<\tau\le\rho^2r\_0^2$に対する空間時間cut-off関数$\varphi$を構成できる。$0\le\varphi<1$、小さい放物型近傍で$\varphi>\rho$、$t\_0$時刻の半径$r\_0$の球の外ではゼロとなり、

$$
|\nabla\varphi|<r\_0^{-1},\qquad
|\partial\_t\varphi|+|\Delta\varphi|<r\_0^{-2}
$$

を満たす。この一様な局所化が熱核の解析を可能にする。

### 短い尺度での熱核評価（Theorem 1.4）

$0\le s<t<T$、$t-s\le c\_1(T-t)^2$なら、

$$
\frac{1}{C\_1(t-s)^n}\exp\negthinspace \left(-\frac{C\_2d\_s(x,y)^2}{t-s}\right)
\le H(x,t;y,s)\le
\frac{C\_1}{(t-s)^n}\exp\negthinspace \left(-\frac{d\_s(x,y)^2}{C\_2(t-s)}\right)
$$

となる。さらに

$$
|\nabla\_xH|\_{\omega(t)}\le\frac{C\_1}{(t-s)^{n+1/2}}
\exp\negthinspace \left(-\frac{d\_s(x,y)^2}{C\_2(t-s)}\right),
\qquad
\frac{|\nabla\_xH|\_{\omega(t)}}{H}\le\frac{C\_2}{\sqrt{t-s}}
\left(1+\frac{d\_s(x,y)}{\sqrt{t-s}}\right)
$$

を得る。定数が$t\to T$で一様であることと、その一様性が成立する時間差の範囲が重要である。

### 全時間差への拡張（Theorem 1.5）

$R(x,t)\le C\_0/(T-t)$を仮定すると、Gaussian上下界と対数勾配の評価は全ての$0\le s<t<T$で成立する。定数は初期データ、次元、$C\_0$に依存する。対数勾配評価の$1+d\_s/\sqrt{t-s}$という距離因子は、Euclidean熱核でも必要であり省けない。

### 一方向の距離評価（Theorem 1.7）

短い尺度では一様定数$C$について

$$
d\_s(x,y)-C\sqrt{t-s}\le d\_t(x,y)
$$

が成立し、type-Iスカラー評価の下では全ての時間差に成立する。他方、上側評価は固定した$s<T$に対し

$$
d\_t(x,y)\le d\_s(x,y)+C(s)\sqrt{t-s},\qquad s<t\le(T+s)/2
$$

という局所的なものにとどまる。$C(s)$が$s\to T$でも有界という主張ではない。このため、一様な両側Hölder評価を仮定して極限を導くことはしない。

### 特異時刻と拡大極限（Theorem 1.8）

$d\_t$は$X\times X$上で擬距離$d\_T$へ一様収束し、

$$
(X,d\_t)\xrightarrow{\mathrm{GH}}(X/{\sim},d\_T),\qquad
x\sim y\ \Longleftrightarrow\ d\_T(x,y)=0
$$

となる。極限は一意であり、正則部分は$X\setminus\operatorname{Null}(\alpha)$上の極限Kähler計量によって記述される。別途仮定(3.1)の下で得られる幾何学的な写像と極限との対応は、ファイバーが潰れる条件に依存するため、無条件の同相同定としては述べない。

固定した基点$x$での$(T-t\_i)^{-1}g(t\_i)$の部分列極限は、特異縮小Kähler–Ricciソリトンの時間断面となり、正規複素解析空間としてlog terminal特異点と偏極Fanoファイブレーションを持つ。Abstractは、移動基点では共役熱流を備えた極限のソリトン性にentropy pinchingが必要となることも述べる。固定基点の結論を移動基点へ無条件には拡張しない。

## 証明の見取り図

Bamler–Zhangの距離とcut-off評価を、曲率が制御できる尺度で放物型に拡大して用いる。熱核の上界にはHein–Naberの積分評価、平均値不等式、エントロピー評価を組み合わせる別々の経路があり、下界にはPerelmanのHarnack評価を用いる。

特異時刻の距離は、局所化、共役熱流間の$W\_1$距離の単調性、packingを用いて構成する。拡大極限のソリトン性にはNashエントロピーの単調性、複素解析構造にはHallgren–Zhangの理論を用いる。

## 原論文との対応

- **Abstractページ:** [Finite Time Noncollapsing Kähler-Ricci Flow: Gaussian Type Heat Kernel, Gromov-Hausdorff Limits](https://arxiv.org/abs/2610.21824)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.21824v1) — Section 1, pp. 2–7（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3–1.5, 1.7–1.8; Corollary 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.21824v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
