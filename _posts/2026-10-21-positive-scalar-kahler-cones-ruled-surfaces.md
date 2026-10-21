---
layout: paper
title: Positive scalar curvature Kähler cones on compact complex surfaces
title_ja: 複素曲面の正スカラー曲率Kähler錐と束の安定性
authors: Zehao Sha
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We determine the positive scalar curvature K\"ahler cone of every minimal compact K\"ahler surface of Kodaira dimension $-\infty$. By the Enriques--Kodaira classification, every such surface is either $\mathbb P^2$ or a geometrically ruled surface $\mathbb P(E)\to\Sigma_g$, where $E$ is a rank-two holomorphic vector bundle over a compact Riemann surface of genus $g$. On $\mathbb P^2$, every K\"ahler class admits a K\"ahler metric of positive scalar curvature, whereas on $\mathbb P(E)$, every K\"ahler class of positive total scalar curvature admits a metric of positive scalar curvature if and only if $g\le1$ or $E$ is slope-semistable. We further prove that if a smooth compact K\"ahler surface admits a birational morphism onto a ruled surface $\mathbb P(E)\to\Sigma_g$, where $g\ge2$ and $E$ is slope-unstable, then it contains a K\"ahler class of positive total scalar curvature admitting no positive scalar curvature K\"ahler metric. Finally, for every smooth compact K\"ahler
  surface $X$ birational to $Y=\mathbb P^2$ or $Y=\mathbb P(E)$, we show that K\"ahler classes admitting positive scalar curvature metrics on $Y$ are exactly the pushforwards of classes admitting such metrics on $X$.
topic: differential-geometry
tags:
- curvature
- stability
- vector-bundles-sheaves
- birational-geometry
- chern-classes
arxiv_id: 2609.27870v2
arxiv_url: https://arxiv.org/abs/2609.27870
arxiv_submitted: '2026-09-03'
arxiv_updated: '2026-10-18'
summary: 小平次元が負の極小Kähler曲面上で、正スカラー曲率計量を含むKähler類の錐を決定する。線織面では全スカラー曲率が正という数値条件だけでは足りず、底曲線の種数と束の不安定性が追加の境界を生む。
abstract_en: ''
summary_en: Positive average scalar curvature is a necessary condition on a Kähler class, but this paper shows why it can fail to be sufficient. On ruled surfaces, the gap between the numerical cone and the cone admitting positive scalar curvature is measured by slope instability of the defining bundle. The paper also follows individual positive classes through birational morphisms. This distinguishes a class-by-class existence problem from existence somewhere on the surface.
abstract_ja: 小平次元−∞の極小コンパクトKähler曲面について正スカラー曲率Kähler錐を明示する。射影平面と極小有理線織面ではすべてのKähler類が該当し、高種数の線織面では定義束のHarder–Narasimhan傾きが境界を決める。全スカラー曲率の正値性とのずれは不安定な束の上で生じ、双有理射への持ち上げ後も障害が残る。さらに射影平面または線織面への双有理射の下で、正スカラー曲率類の押し出しを特徴づける。
abstract_source_url: https://arxiv.org/abs/2609.27870
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.27870v2](https://arxiv.org/abs/2609.27870)
- **著者:** Zehao Sha
- **初回投稿日:** 2026-09-03
- **最終更新日:** 2026-10-18
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクト複素多様体に正スカラー曲率のKähler計量が一つ存在することと、指定したKähler類にそのような計量が存在することは異なる。本論文は後者を曲面上で調べ、全スカラー曲率の正値性という交点数条件だけでは十分でないことを示す。

極小で小平次元が負の曲面は、射影平面または線織面として記述される。線織面の場合、計量の存在錐の境界は、底曲線の種数に加え、階数2の束の傾き不安定性によって動く。種数が2以上で束が不安定なら、平均的には正でも、至る所正のスカラー曲率計量を持たないKähler類が現れる。

さらにこの障害が双有理射の下でも残ることと、正スカラー曲率類を押し出したときの正確な像を扱う。したがって単に極小曲面の一覧を与えるだけでなく、ブローアップした曲面上の個々の類と極小モデル上の類を結びつける。

## 背景と問題設定

Kähler錐を$\mathcal K\_X$とし、正スカラー曲率計量を含む類の集合を$\mathcal K\_X^{\mathrm{psc}}$と書く。論文の規約では、複素次元$n$の類$\alpha=[\omega]$について

$$
\int\_X S(\omega)\omega^n=2n\pi c\_1(X)\cdot\alpha^{n-1}
$$

である。従って$\mathcal K\_X^{\mathrm{psc}}\subseteq T\_X^+$、ただし$T\_X^+=\lbrace \alpha\in\mathcal K\_X:c\_1(X)\cdot\alpha^{n-1}>0\rbrace $となる。問題は逆包含である。

線織面$X=\mathbb P(E)\to\Sigma\_g$について、$F$をファイバー類、$\zeta=c\_1(\mathcal O\_{\mathbb P(E)}(1))-(\deg E/2)F$と置く。また

$$
\Delta(E)=2\mu\_{\max}(E)-\deg E\ge0
$$

を不安定性の量とする。これは束を線束で捻っても変わらず、零となるのは傾き半安定の場合に限る。実$(1,1)$類を$\alpha=2\pi(a\zeta+bF)$と表示する。

## 主結果

### 極小曲面の錐の明示（Theorem 1）

極小Kähler曲面で小平次元が$-\infty$の場合を考える。$X=\mathbb P^2$またはHirzebruch曲面$\mathbb F\_j$、$j=0$または$j\ge2$なら

$$
\mathcal K\_X^{\mathrm{psc}}=T\_X^+=\mathcal K\_X
$$

である。$X=\mathbb P(E)\to\Sigma\_g$、$g\ge1$なら

$$
T\_X^+=\left\lbrace 2\pi(a\zeta+bF):a>0,\ b>\max\left\lbrace g-1,\frac{\Delta(E)}2\right\rbrace a\right\rbrace ,
$$

$$
\mathcal K\_X^{\mathrm{psc}}=\left\lbrace 2\pi(a\zeta+bF):a>0,\ b>\left(g-1+\frac{\Delta(E)}2\right)a\right\rbrace .
$$

従って二つの錐が等しいことは、$g=1$または$E$が傾き半安定であることと同値になる。最大値と和の違いが、数値的正値性だけでは捉えられない障害を明確に表す。

### 不安定線織面を支配する曲面の障害（Theorem 2）

滑らかなコンパクトKähler曲面$X$から、$g\ge2$の曲線上の傾き不安定束$E$で定まる$Y=\mathbb P(E)$へ双有理射が存在すれば

$$
\mathcal K\_X^{\mathrm{psc}}\subsetneq T\_X^+
$$

である。極小モデルでの障害を、ブローアップによって一律に消すことはできない。

### 正スカラー曲率類の押し出し（Theorem 3）

$p:X\to Y$を滑らかなコンパクトKähler曲面間の双有理射とし、$Y=\mathbb P^2$または任意種数の曲線上の線織面とする。このとき

$$
p\_*\mathcal K\_X^{\mathrm{psc}}=\mathcal K\_Y^{\mathrm{psc}}
$$

である。無限近接点を含む有限回の点ブローアップも許される。既知のブローアップ存在定理が一方向を与え、本論文は逆方向を、例外因子の係数の小ささを仮定せず示す。

### 選んだ極小モデルへの像の保存（Corollary 4）

一般の双有理射$p:X\to Y$と極小化$r:Y\to Y\_{\min}$に対し、$\alpha\in\mathcal K\_X^{\mathrm{psc}}$なら、ある$\beta\in\mathcal K\_Y^{\mathrm{psc}}$で

$$
r\_*\beta=(r\circ p)\_*\alpha
$$

となるものがある。$Y$が極小なら$\beta=p\_*\alpha$となる。

## 証明の見取り図

Introductionは、正スカラー曲率計量の変分的特徴づけとその非Archimedean形式を、線織面の交点計算に組み合わせる方針を説明する。不安定束ではHarder–Narasimhan切断の法錐への変形が安定性障害を与え、それが双有理射の下で残る。

押し出しの定理と既知のブローアップ定理を合わせると、極小モデル上の障害を小さいブローアップ係数で持ち上げる別の説明も得られる。分解可能な束については、付録のmomentum構成が障害を具体的な計量モデルとして表すと紹介されている。

## 原論文との対応

- **Abstractページ:** [Positive scalar curvature Kähler cones on compact complex surfaces](https://arxiv.org/abs/2609.27870)
- **Introduction:** [PDF](https://arxiv.org/pdf/2609.27870v2) — Section 1, pp. 1–4（Section 2直前まで）。
- **Introduction中で言及された主要結果:** Theorems 1, 2, 3、Corollary 4。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2609.27870v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
