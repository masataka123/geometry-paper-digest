---
layout: paper
title: 'Uniform estimates for complex Monge-Ampère equations II: Hermitian manifolds'
title_ja: Hermitian多様体上のMonge–Ampère方程式のOrlicz一様評価
authors: Quang-Tuan Dang, Lei Zhang, Bin Zhou
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.DG
arxiv_abstract: We establish uniform estimates for degenerate complex Monge--Amp\`ere equations on compact Hermitian manifolds under weak Orlicz integrability assumptions on the densities. Our estimates apply uniformly to Hermitian metrics and to semipositive uniformly non-collapsing reference forms. For arbitrary big reference forms, we obtain uniform relative $L^\infty$-estimates with respect to the extremal function with minimal singularities, and establish continuity of the resulting solutions on the regular locus. As an application, we prove the existence of solutions with minimal singularities to degenerate complex Monge--Amp\`ere equations associated with big forms. The proofs combine local Orlicz estimates with pluripotential-theoretic envelope techniques and uniform control of the Monge--Amp\`ere masses, overcoming the lack of invariance of the total Monge--Amp\`ere mass in the Hermitian setting.
topic: several-complex-variables
tags:
- monge-ampere-equations
- pluripotential-theory
- positivity
arxiv_id: 2610.39259v1
arxiv_url: https://arxiv.org/abs/2610.39259
arxiv_submitted: '2026-10-29'
arxiv_updated: '2026-10-29'
summary: コンパクトHermitian多様体上で、密度に弱いOrlicz可積分性しか課さない退化Monge–Ampère方程式を扱う。半正値参照形式にはMonge–Ampère質量の非崩壊条件を用い、big形式では最小特異性を持つ包絡との差を一様に評価することで、解の存在と正則部分での連続性を得る。
abstract_en: We establish uniform estimates for degenerate complex Monge--Amp\`ere equations on compact Hermitian manifolds under weak Orlicz integrability assumptions on the densities. Our estimates apply uniformly to Hermitian metrics and to semipositive uniformly non-collapsing reference forms. For arbitrary big reference forms, we obtain uniform relative $L^\infty$-estimates with respect to the extremal function with minimal singularities, and establish continuity of the resulting solutions on the regular locus. As an application, we prove the existence of solutions with minimal singularities to degenerate complex Monge--Amp\`ere equations associated with big forms. The proofs combine local Orlicz estimates with pluripotential-theoretic envelope techniques and uniform control of the Monge--Amp\`ere masses, overcoming the lack of invariance of the total Monge--Amp\`ere mass in the Hermitian setting.
summary_en: ''
abstract_ja: コンパクトHermitian多様体上の退化複素Monge–Ampère方程式に対し、密度の弱いOrlicz可積分条件のもとで一様評価を確立する。Hermitian計量の場合から、半正値で一様に非崩壊な参照形式、さらに任意のbig参照形式へ議論を広げる。big形式の場合には最小特異性を持つ極値関数に対する相対的なL∞評価を得て、解の正則部分での連続性と最小特異性を持つ解の存在を示す。局所Orlicz評価、包絡の手法、Monge–Ampère質量の一様制御を組み合わせることで、Hermitianの場合に総質量が一定でない困難を扱う。
abstract_source_url: https://arxiv.org/abs/2610.39259
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.39259v1](https://arxiv.org/abs/2610.39259)
- **著者:** Quang-Tuan Dang, Lei Zhang, Bin Zhou
- **初回投稿日:** 2026-10-29
- **最終更新日:** 2026-10-29
- **主分類・副分類:** math.CV（主分類）; math.DG
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Kähler多様体上のMonge–Ampère方程式では、ポテンシャルを変えても総質量がコホモロジー類で固定される。一方、一般のHermitian多様体ではその性質が失われ、参照形式や密度が退化する場合の一様評価がより難しくなる。

本論文は密度にOrlicz可積分性を仮定し、通常の$L^p$、$p>1$の枠組みより弱い領域で一様評価を扱う。局所Dirichlet問題の評価を大域的な補助方程式とplurisubharmonic包絡で結び、Hermitian計量、半正値形式、big形式の三つの設定を整理する。

半正値の場合には質量の一様な非崩壊が鍵となる。big形式では解自体が有界とは限らないため、最小特異性を持つ包絡$V\_\theta$との差を評価する。絶対的有界性と相対的有界性を使い分ける点が主結果の読み取りに重要である。

## 背景と問題設定

$(X,\omega\_X)$を複素次元$n$のコンパクトHermitian多様体とし、$d^c=\frac{i}{2}(\bar\partial-\partial)$、$dd^c=i\partial\bar\partial$とする。密度$f$は固定した滑らかな体積形式$dV$に関して測り、$\mu=f\thinspace dV$を確率測度とする。

IntroductionはOrlicz関数$w$への仮定をCondition (K)、bigの場合の追加仮定をCondition (I)と参照している。その詳細な定義はIntroduction外であるため、以下でもこれらを必須の仮定として残す。任意のOrlicz可積分密度に無条件で適用できるという主張ではない。

## 主結果

### Hermitian計量の振幅評価（Theorem A）

$f\ge0$、ほとんど至る所$f>0$、$f\in L^w(dV)$とCondition (K)を仮定する。$c>0$について

$$
(\omega\_X+dd^c\varphi)^n=c\mu,\qquad\sup\_X\varphi=0
$$

を満たす有界な$\omega\_X$-psh解には、$\operatorname{Osc}(\varphi)\le C$という一様評価がある。定数は背景幾何、Orliczデータ、Introductionに指定された$f$のノルムとその逆数の制御に依存する。これはここでは既存の有界解に対する先験評価として述べられている。

### 半正値形式と非崩壊（Theorem B）

半正値$(1,1)$形式$\theta\le A\omega\_X$について、

$$
v\_-(\theta)=\inf\_{u\in\operatorname{PSH}(X,\theta)\cap L^\infty(X)}\int\_X(\theta+dd^cu)^n>0
$$

を仮定する。密度にはTheorem Aと同じ正値性・Orlicz条件を課す。このとき任意の$\lambda\ge0$に対して、有界解$\varphi$と$c>0$が存在し、

$$
(\theta+dd^c\varphi)^n=ce^{\lambda\varphi}\mu,\qquad\sup\_X\varphi=0,\qquad\operatorname{Osc}(\varphi)\le C
$$

を満たす。振幅の定数$C$は$\lambda\ge0$に依存せず選べるが、$v\_-(\theta)$の正の下界などの制御には依存する。

### Big形式での相対評価（Theorem C）

$\theta\le A\omega\_X$がbigで、$f\ge0$、$f\in L^w(dV)$、Condition (K)と(I)を満たす確率密度を仮定する。包絡を

$$
V\_\theta=\sup\lbrace u\in\operatorname{PSH}(X,\theta):u\le0\rbrace
$$

とすると、同じ方程式を満たす解$\varphi$と$c>0$が存在し、

$$
|\varphi-V\_\theta|\le C
$$

となる。したがって$\varphi$は最小特異性を持つ。解析的特異性を持つ$\rho\_0$で$\theta+dd^c\rho\_0\ge\varepsilon\_0\omega\_X$と取ったとき、$\varphi$は$\Omega=X\setminus\lbrace\rho\_0=-\infty\rbrace$上で連続である。この場合の定数は$\lambda$にも依存し得る。

## 証明の見取り図

有界hyperconvex領域の局所問題にCegrellの理論、包絡、補助関数法を適用してOrlicz評価を得る。これを局所解からの大域的劣解と補助Monge–Ampère方程式により大域化する。

半正値形式はHermitian形式で近似し、$v\_-(\theta)>0$を使って規格化定数を制御する。big形式では最小特異性の包絡を近似し、特異性を解消するmodification上で評価を確立して極限に移る。総質量の変動を近似の各段階で抑えることが、Kählerの場合との主要な違いである。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.39259)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.39259v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems A, B, C
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.39259v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
