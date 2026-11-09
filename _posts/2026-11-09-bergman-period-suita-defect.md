---
layout: paper
title: Period bounds for Bergman kernel variation and the Suita defect
title_ja: Bergman核の曲率とSuita不等式の欠損に対する周期評価
authors: Fusheng Deng, Gang Huang, Kefeng Liu
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: The periods of holomorphic differentials give an explicit lower bound for the curvature of Bergman evaluation matrices. We prove this bound along the Green sublevels of a smooth plane domain. For scalar evaluation at the Green pole, equality at one regular level holds precisely when that sublevel is simply connected. For complete jets at the Green pole, the matrices have continuous first derivatives, including at critical levels, and their logarithmic determinant defects are integrals of nonnegative curvature densities. A further estimate bounds the accumulated period energy by the determinant defect, with a constant independent of the jet order. On a multiply connected domain, all these defects vanish up to the first critical Green value and become strictly positive above it.
topic: several-complex-variables
tags:
- curvature
- positivity
arxiv_id: 2611.09341v1
arxiv_url: https://arxiv.org/abs/2611.09341
arxiv_submitted: '2026-11-06'
arxiv_updated: '2026-11-06'
summary: 平面領域のGreen部分レベル集合に沿うBergman評価行列の曲率を、正則微分の周期成分で下から評価する。Suita不等式の等号からのずれを曲率の積分として表し、jet次数に依存しない周期エネルギーの安定性評価と単連結性の判定を得る。
abstract_en: ''
summary_en: Deng, Huang and Liu quantify the topological contribution to Bergman-kernel variation along Green sublevels. Their estimates distinguish exact holomorphic differentials from the full Bergman space and identify a one-level equality criterion. Complete jets lead to determinant defects that accumulate curvature through critical levels. A further bound controls period energy uniformly in the jet order when the determinant defect is small.
abstract_ja: 滑らかな有界平面領域で、Green関数の部分レベル集合に沿うBergman評価行列に周期を含む曲率下界を与える。Green極でのスカラー評価では、一つの正則レベルで等号となることが、その部分領域の単連結性と同値である。完全jetの評価行列は臨界レベルを越えてC¹で、正規化された対数行列式の欠損を非負曲率密度の積分で表せる。欠損が小さい場合の周期エネルギーの積分上界はjet次数に依存せず、多重連結領域では最初の臨界値の前後で欠損の消失と正値性が切り替わる。
abstract_source_url: https://arxiv.org/abs/2611.09341
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.09341v1](https://arxiv.org/abs/2611.09341)
- **著者:** Fusheng Deng, Gang Huang, Kefeng Liu
- **初回投稿日:** 2026-11-06
- **最終更新日:** 2026-11-06
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Bergman核は領域の大きさだけでなく位相にも依存する。本論文は、正則1形式の周期が消える部分空間と全Bergman空間との差を用い、領域の穴が核の変動へ与える寄与を定量化する。

領域をGreen関数の部分レベル集合として動かすと、評価行列の曲率に明示的な下界が得られる。Green極でのスカラー評価では、一つの正則レベルで下界との等号が成り立つことが単連結性と同値になる。通常の凸性を、周期成分を含むより強い評価へ改善する点が重要である。

さらに完全jetを使うと、Suita不等式の対数的欠損を一般化した行列式の量が得られる。これは臨界レベルを越えて曲率の積分で表され、欠損が小さいと周期エネルギーも積分の意味で小さくなる。評価定数はjet次数に依存しない。

## 背景と問題設定

$D\Subset\mathbb C$を連結で$C^\infty$境界を持つ領域とし、$q\in D$を固定する。正のGreen関数を

$$
g\_D(z,q)=\log\frac1{|z-q|}-\log c\_D(q)+o(1)
$$

と正規化し、$\Phi=-g\_D(\cdot,q)$、$D\_t=\lbrace \Phi<t\rbrace $、$-\infty<t<0$と置く。exact Bergman空間$A\_e^2$は$f(z)dz$が正則関数の微分となる$f$の空間であり、その直交射影を$\Pi\_e$とする。

固定内点での評価・正則微分の独立な線形結合$L\_j$のBergman表現を$k\_{j,t}$とし、$M\_{ij}=\langle k\_{j,t},k\_{i,t}\rangle$、$M^e\_{ij}=\langle\Pi\_e k\_{j,t},\Pi\_e k\_{i,t}\rangle$と定める。$M-M^e$が周期成分を測る。

## 主結果

### 主定理1：周期を含む曲率下界（Theorem A）

評価点を含む正則Greenレベルでは、半正定値行列の順序で

$$
M''\succeq2M'(M+M^e)^{-1}M'
$$

が成立し、特に$(\log\det M)''\geq0$となる。Green極での核を$K\_t=K\_{D\_t}(q,q)$、exact核を$K\_t^e$と書くと、

$$
(\log K\_t)''\geq\frac{K\_t-K\_t^e}{K\_t+K\_t^e}\big((\log K\_t)'\big)^2
$$

である。このスカラー不等式で一つの正則レベルにおいて等号が成り立つことと、$D\_t$が単連結であることは同値である。

### 主定理2：行列式欠損の積分表示（Theorem B）

完全な正規化jet $L\_jf=f^{(j)}(q)/j!$、$0\leq j<\ell$の行列を$M^{(\ell)}$とし、

$$
F\_\ell(t)=\log\frac{\pi^\ell e^{\ell(\ell+1)t}\det M^{(\ell)}(t)}
{\ell!c\_D(q)^{\ell(\ell+1)}}
$$

と置く。$M^{(\ell)}$は$(-\infty,0)$で$C^1$、その導関数は局所絶対連続であり、正則値で$E\_\ell=(\log\det M^{(\ell)})''$とすると

$$
F\_\ell(t)=\int\_{-\infty}^t(t-s)E\_\ell(s)\thinspace ds,\qquad -\infty<t\leq0
$$

となる。$t=0$は全領域の極限であり、臨界値での密度の値は積分に影響しない。正則値で$E\_\ell(t)=0$となることは$D\_t$の単連結性と同値である。$\ell=1$では$F\_1=\log(\pi K\_{D\_t}(q,q)/c\_{D\_t}(q)^2)$がSuita不等式の対数的欠損となる。

### 主定理3：次数によらない安定性（Theorem C）

完全jetに対し

$$
P\_t=M\_t^{-1/2}(M\_t-M\_t^e)M\_t^{-1/2},\qquad
\rho\_\ell(t)=\operatorname{tr}\big(P\_t(2I-P\_t)^{-1}\big)
$$

と置き、臨界値では$\rho\_\ell=0$とする。$t\_0\leq0$、$\varepsilon\geq0$について$F\_\ell(t\_0)\leq\varepsilon$なら、

$$
\int\_{-\infty}^{t\_0-\delta}\rho\_\ell(t)\thinspace dt
\leq\frac{\varepsilon}{4\delta-2\varepsilon},\qquad\delta>\varepsilon/2
$$

が成り立つ。欠損は$\ell$で割らない全対数行列式欠損である。$\tfrac12\operatorname{tr}P\_t\leq\rho\_\ell\leq\operatorname{tr}P\_t$なので、jet表現の周期エネルギーの総和を制御する。

多重連結な$D$では、$\Phi$の最初の臨界値$t\_\ast $まで$F\_\ell=F\_\ell'=0$、その後$t\_\ast <t<0$では両者が正になる。閾値は完全jetの次数によらない。

## 証明の見取り図

既存の領域変分公式と調和射影の理論を出発点とし、周期の共役関係によってnonexact成分を内部エネルギーで二重に数える。これが重み付き評価行列$(M+M^e)/2$を生み、Theorem Aの下界につながる。

臨界レベルの連続性には、核の境界値を$|\nabla\Phi|$で抑える評価を用いる。欠損の積分表示と、逆行列を含むtraceの微分恒等式を組み合わせてTheorem Cへ進む。既知のSuita不等式そのものと、本論文の周期を保持した定量評価を区別している。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.09341)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.09341v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems A–C; equations (1.1)–(1.5)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.09341v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
