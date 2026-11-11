---
layout: paper
title: Negative normal degree and holomorphic sectional curvature pinching
title_ja: 負の法束次数から得る正則断面曲率pinchingの上界
authors: Xingluan Wang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We obtain an upper bound for the local holomorphic sectional curvature pinching of a Kähler manifold containing a smooth rational curve of negative total normal degree. As an application, we prove that a compact Kähler surface with positive holomorphic sectional curvature and local pinching constant at least $1/9$ is biholomorphic to $\mathbb{CP}^2$, $\mathbb{CP}^1\times\mathbb{CP}^1$, or the first Hirzebruch surface $\mathbb F_1$. For pinching strictly greater than $1/9$, only the first two possibilities occur, confirming a conjecture of Yang and Zheng. We also determine the optimal local pinching constants on $\mathbb F_1$ and $\mathbb F_2$.
topic: differential-geometry
tags:
- curvature
- vector-bundles-sheaves
arxiv_id: 2611.12194v1
arxiv_url: https://arxiv.org/abs/2611.12194
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: 負の全法束次数を持つ滑らかな有理曲線が、正の正則断面曲率の局所pinchingに課す上界を示す。コンパクトKähler曲面では閾値1/9の分類を得て、Hirzebruch曲面F₁とF₂の最適pinching定数も決定する。
abstract_en: ''
summary_en: A rational curve with negative normal degree obstructs strong holomorphic sectional-curvature pinching. Wang quantifies this obstruction using the curve’s second fundamental form. In complex dimension two it yields a classification at the threshold one ninth, including the equality case. It also identifies optimal pinching constants on the first two Hirzebruch surfaces without restricting to a particular metric family.
abstract_ja: Kähler多様体に埋め込まれた有理曲線の法束次数と第二基本形式から、正則断面曲率の局所的な最大値・最小値の比を制限する。曲面の場合、局所pinchingが1/9以上なら複素射影平面、二つの射影直線の積、第一Hirzebruch曲面のいずれかとなり、1/9より大きければ最後の可能性が消える。第一・第二Hirzebruch曲面では既知の計量族の最適値が全Kähler計量の中でも最適であることを示す。
abstract_source_url: https://arxiv.org/abs/2611.12194
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.12194v1](https://arxiv.org/abs/2611.12194)
- **著者:** Xingluan Wang
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正則断面曲率が正であっても、その方向ごとの変動がどれだけ小さいかによって複素多様体の形は変わる。各点で最小曲率を最大曲率で割った局所pinching定数は、その変動を測る。従来よく理解されていた$1/2$より低い領域では、直交双断面曲率の非負性が自動的には得られない。

本論文は、負の法束次数を持つ有理曲線を使ってpinchingの上限を与える。曲線に沿う負値性という代数幾何的情報が、計量の曲率の方向差を強制する。

曲面では$(-1)$-曲線が閾値$1/9$を生み、Yang–Zhengの予想に答える分類に結び付く。等号のときには第一Hirzebruch曲面が残り、負の曲線は全測地的な$(-1)$-曲線に限られる。さらに$\mathbb F\_1,\mathbb F\_2$の最適値をすべての正曲率Kähler計量の中で決定する。

## 背景と問題設定

複素次元$n\ge2$のKähler多様体で正則断面曲率$H\_g$を正とする。各点の単位接ベクトルにわたる最大・最小を$H\_{\max}(p),H\_{\min}(p)$とし、

$$
\lambda\_A(g)=\inf\_{p\in A}\frac{H\_{\min}(p)}{H\_{\max}(p)}
$$

と定める。これは多様体全体の最小曲率を全体の最大曲率で割る大域pinchingとは区別する。

滑らかな正則埋め込み$C\simeq\mathbb {CP}^1\subset M$について、$d=-\deg N\_{C/M}>0$とし、第二基本形式$\Pi$、曲線上の単位接ベクトル$e$を用いて$S=\int\_C|\Pi(e,e)|\_g^2\thinspace \omega\_C$と置く。

## 主結果

### 主定理1：負の法束次数による障害（Theorem 1.1）

$$
\mu(n,d,S)=\frac{2\pi d+S}{(n-1)(4\pi+S)},\qquad
\Phi(\mu)=\begin{cases}\frac12-\mu,&0<\mu\le\frac14,\\
(1+4\mu)^{-2},&\mu\ge\frac14\end{cases}
$$

と定めると、

$$
\lambda\_M(g)\le\lambda\_C(g)\le\Phi\bigl(\mu(n,d,S)\bigr)
\le\Phi\left(\frac{\min\lbrace d/2,1\rbrace }{n-1}\right)
$$

が成り立つ。定理自体はコンパクト性を仮定しない。第二基本形式の積分を残す評価と、それを除いた次数だけの上界を同時に与える点が具体的内容である。

### 主定理2：曲面の閾値分類（Theorem 1.2）

$M$がコンパクト連結Kähler曲面で$H\_g>0$なら、$\lambda\_M(g)>1/9$の場合は

$$
M\simeq\mathbb {CP}^2\quad\text{または}\quad\mathbb {CP}^1\times\mathbb {CP}^1
$$

となる。条件を$\lambda\_M(g)\ge1/9$へ弱めると、さらに$\mathbb F\_1$が可能になる。厳密不等号と等号を含む場合では結論が異なる。

Remark 1.3によれば、閾値で残り得る負の有理曲線は全測地的な$(-1)$-曲線である。一方、高次元では全法束次数だけから同様の分類は得られない。Introductionは点での射影空間の爆発を挙げ、この方法の限界を説明する。

### Hirzebruch曲面の最適値（Corollary 1.4）

$\Lambda\_{\mathbb F\_d}$を$\mathbb F\_d$上の$H\_g>0$を満たすすべてのKähler計量の局所pinching定数の上限とすると、

$$
\Lambda\_{\mathbb F\_1}=\frac19,\qquad
\Lambda\_{\mathbb F\_2}=\frac1{25},\qquad
\Lambda\_{\mathbb F\_d}\le\frac1{25}\quad(d\ge3)
$$

である。既知のHitchin型計量で得られる値を、$d=1,2$では特定の計量族に限らない最適値へ高める。$d\ge3$についてここで主張されるのは上界であり、最適値の決定ではない。

## 結果を結ぶ見取り図

Introductionは、負の法束次数と第二基本形式の積分から曲線に沿うpinchingを制限し、その上界を曲面の分類へ適用するという順序を示す。$n=2,d=1$を一般評価へ入れると$1/9$が現れ、負の曲線の存在が強いpinchingの障害となる。Hirzebruch曲面では負の切断への上界と既知の計量による下界を比較する。曲率評価および等号剛性の証明の詳細は後続節に置かれており、ここではIntroductionが述べる結果間の関係に限る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.12194)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.12194v1) — Section 1, pp. 1–2（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.2; Remark 1.3; Corollary 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.12194v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
