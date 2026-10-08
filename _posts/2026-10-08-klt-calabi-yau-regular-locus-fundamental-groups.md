---
layout: paper
title: Fundamental groups of Calabi-Yau spaces
title_ja: 特異Calabi–Yau空間と正則部分の基本群
authors: Xin Fu, Bin Guo, Jian Song, Juanyong Wang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
- math.AP
arxiv_abstract: |-
  We study the fundamental groups of a normal projective Calabi-Yau variety $X$ with klt singularities and of its regular locus $X_{reg}$. We prove that both groups are almost abelian, and that their ranks are determined by the irregularities of finite etale and quasi-etale covers, respectively. Our approach is differential geometric, and relies on recent advances in the geometric theory of complex Monge-Ampere equations.
topic: differential-geometry
tags:
- calabi-yau-geometry
- singularities
- fundamental-groups
- metric-limits
- monge-ampere-equations
arxiv_id: 2610.09269v1
arxiv_url: https://arxiv.org/abs/2610.09269v1
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: |-
  Klt特異点を持つ射影Calabi–Yau多様体とその正則部分の通常の位相的基本群が、いずれも有限指数の自由アーベル部分群を持つことを示す。特異Ricci-flat計量のRCD構造と複素的な分裂を用い、群の階数を有限エタール・準エタール被覆の不正則数によって区別して記述する。
abstract_en: ''
summary_en: |-
  Singular points complicate the relationship between Ricci-flat geometry and the topology of a Calabi–Yau space. This paper distinguishes the fundamental group of the whole variety from that of its smooth locus. By analyzing completed covers and a holomorphic refinement of metric splitting, the authors obtain finite-index abelian descriptions of both groups. The two ranks are governed by different classes of finite covers, and the complementary factor for the regular-locus statement has simply connected smooth locus.
abstract_ja: |-
  正規な射影Calabi–Yau多様体Xがklt特異点を持つ場合に、Xおよびその正則部分の基本群を調べる。両者がalmost abelianであることを示し、それぞれの階数を有限エタール被覆および有限準エタール被覆の不正則数で決定する。証明は微分幾何的であり、複素Monge–Ampère方程式が定める特異計量空間の近年の理論に基づく。
abstract_source_url: https://arxiv.org/abs/2610.09269v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.09269v1](https://arxiv.org/abs/2610.09269v1)
- **著者:** Xin Fu, Bin Guo, Jian Song, Juanyong Wang
- **初回投稿日:** 2026-10-07
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.DG（主分類）、math.AG, math.AP（副分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかなコンパクトCalabi–Yau多様体では、Ricci-flat計量の分裂から基本群がalmost abelianとなることが知られている。特異点があると、正則部分上の計量は一般に不完備であり、その普遍被覆も多様体全体の非分岐被覆にはならないため、同じ議論をそのまま適用できない。

著者らは、特異Ricci-flat計量の距離完備化と、正則部分の普遍被覆の完備化を調べる。近年確立されたRCD構造を用いて実の距離的分裂を複素的・正則な積構造へ強め、基本群を有限指数まで記述する。

多様体全体と正則部分では、現れるアーベル因子の次元が異なりうる。前者は至る所エタールな被覆、後者は特異点上の分岐を許す準エタール被覆に対応する。主要な新しい結論は、後者の分解に現れる補因子の正則部分が単連結になることである。

## 背景と問題設定

論文でいうCalabi–Yau多様体$X$は、複素数体上の連結な正規射影多様体で、klt特異点を持ち、$K_X\equiv0$を満たすものを指す。不正則数が0であるとは仮定しない。固定した偏極に属する特異Ricci-flat計量を考え、その距離完備化が$X$と同相な$\mathrm{RCD}(0,2n)$空間となるという既知の解析的結果を用いる。

すべての基本群は通常の位相的基本群である。$q(V)=h^1(V,\mathcal O_V)$とし、二つの量を

<div>
$$
q'(X)=\sup_{X'\to X\,\text{有限連結エタール}}q(X'),
\qquad
\widetilde q(X)=\sup_{X'\to X\,\text{有限連結準エタール}}q(X')
$$
</div>

と定める。準エタール射は、標的の複素余次元2以上の集合を除けばエタールとなる有限全射である。

## 主結果

### 複素的な分裂（Theorem 1.1）

$X$の通常の普遍被覆$\widetilde X$が距離的な直線を含めば、正則かつ等長な分裂

<div>
$$
\widetilde X\simeq\mathbb C\times Y
$$
</div>

が存在する。$Y$は単連結で正規なKähler空間であり、klt特異点を持ち、複素次元は$n-1$である。実のRCD分裂に複素構造を反映させる結果である。

### 多様体全体の基本群（Theorem 1.2）

有限エタール被覆$A\times Y\to X$が存在し、$A$は次元$q'(X)$のアーベル多様体、$Y$は単連結な射影Calabi–Yau多様体となる。さらに

<div>
$$
\widetilde X\simeq\mathbb C^{q'(X)}\times Y,
\qquad
\mathbb Z^{2q'(X)}\subset\pi_1(X)\quad\text{は有限指数}
$$
</div>

である。Introductionは、$\pi_1(X)$のalmost abelian性自体には先行結果があり、今回の議論が積構造と階数の同定を加えると説明する。

### 正則部分の基本群（Theorem 1.3）

有限準エタール被覆$A\times Y\to X$が存在し、$A$はアーベル多様体、$Y$はcanonical特異点を持つ正規射影多様体で、

<div>
$$
\dim A=\widetilde q(X),\quad K_Y\sim0,\quad
\widetilde q(Y)=0,\quad\pi_1(Y_{\mathrm{reg}})=\lbrace 1\rbrace
$$
</div>

となる。したがって

<div>
$$
\mathbb Z^{2\widetilde q(X)}\subset\pi_1(X_{\mathrm{reg}})
\quad\text{は有限指数}
$$
</div>

であり、特に$\widetilde q(X)=0$なら$\pi_1(X_{\mathrm{reg}})$は有限である。有限被覆や線形表現だけに関する制約ではなく、通常の基本群そのものの構造を述べる。

## 証明の見取り図

正則部分の普遍被覆を$M$とし、引き戻したRicci-flat計量に関する完備化を考える。Braunの局所基本群の有限性により、小さな特異点近傍上では各被覆成分が有限次数となり、Grauert–Remmertの定理で正規解析的な拡張が得られる。著者らはこの解析的拡張と距離完備化を同定し、完備化のRCD構造を証明する。

解析面ではコンパクトなorbifold解消上の滑らかな近似とRicci entropy評価を用い、被覆のシートについて和を取ることで、コンパクトな商上のSobolev評価を利用する。勾配評価とcapacity cutoffから大域Bochner不等式を得た後、複素的な分裂を適用する。Introductionは、一般のklt対、nef反標準因子の場合、非射影コンパクトKählerの場合への拡張を別稿の予定として区別している。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.09269v1](https://arxiv.org/abs/2610.09269v1)
- **Introduction:** Section 1、pp. 1–5。
- **主結果:** Theorems 1.1–1.3、式(1.1)–(1.3)。
- **論文構成:** Sections 2–3で分裂と全体の基本群、Sections 4–6で完備化とRCD構造、Section 7で正則部分の基本群を扱う。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
