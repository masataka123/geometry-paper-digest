---
layout: paper
title: Remarks on Singular Kähler-Einstein Metrics
title_ja: 弱い特異Kähler–Einstein計量からlog terminal特異点へ
authors: Max Hallgren, Gábor Székelyhidi
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We study two different natural notions of singular K\"ahler-Einstein metrics on normal complex varieties. In the setting of singular Ricci flat K\"ahler cone metrics that arise as non-collapsed limits of sequences of K\"ahler-Einstein metrics or K\"ahler-Ricci flows, we show that an a priori weaker notion is equivalent to the stronger one introduced by Eyssidieux-Guedj-Zeriahi, and in particular the underlying variety has log terminal singularities in this case. Our method applies to more general singular K\"ahler-Einstein spaces as well, assuming that they define RCD spaces.
topic: differential-geometry
tags:
- singularities
- kahler-einstein-metrics
- metric-limits
- l2-methods
arxiv_id: 2505.01943v1
arxiv_url: https://arxiv.org/abs/2505.01943
arxiv_submitted: '2025-05-03'
arxiv_updated: '2025-05-03'
summary: 正則部分上のKähler–Einstein計量と有界な局所ポテンシャルから、空間の特異点をどこまで制御できるかを調べる。RCD条件と正則性などを加えたrough Kähler–Einstein空間では各解析的芽がlog terminalとなり、コンパクトな場合やRicci平坦錐の場合には既存の特異Kähler–Einstein計量の定義と結びつく。
abstract_en: ''
summary_en: The paper compares metric and algebro-geometric descriptions of singular Einstein spaces. Its hypotheses combine bounded local potentials with lower metric control, an RCD condition, and volume regularity. These assumptions force each analytic germ to be log terminal. For compact spaces and Ricci-flat cones, the resulting metric also fits the pluripotential definition, with applications to cones obtained from noncollapsed geometric limits.
abstract_ja: 正規Kähler空間の正則部分にあるEinstein計量を、特異点を含む空間全体の計量として理解する問題を扱う。有界な局所ポテンシャルに加え、滑らかな計量による下からの制御、RCD条件、体積に関する正則性を仮定すると、各点の解析的芽がlog terminalであることを示す。コンパクト空間またはRicci平坦Kähler錐では、計量はEyssidieux–Guedj–Zeriahiの意味の特異Kähler–Einstein計量となる。非崩壊なKähler–Einstein多様体やKähler–Ricci流の極限から現れる錐にも適用される。
abstract_source_url: https://arxiv.org/abs/2505.01943
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2505.01943v1](https://arxiv.org/abs/2505.01943)
- **著者:** Max Hallgren, Gábor Székelyhidi
- **初回投稿日:** 2025-05-03
- **最終更新日:** 2025-05-03
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正規複素空間の正則部分にKähler–Einstein計量があり、その局所ポテンシャルが有界であるとき、特異点にも代数幾何学的な良さが従うだろうか。本論文の出発点は、この弱い解析的記述からlog terminal特異点を導けるかという問いである。

著者らは、距離測度空間としてのRCD条件と正則性などを加えたrough Kähler–Einstein空間を定義する。この設定では、各点の解析的芽がlog terminalとなる。単に正則部分でEinstein方程式を満たすだけのすべての空間について解決した、という主張ではない。

コンパクトな場合とRicci平坦Kähler錐の場合には、空間全体が $\mathbb Q$-Gorensteinとなり、計量がEyssidieux–Guedj–Zeriahiの意味の特異Kähler–Einstein計量へ延長する。さらに、非崩壊なKähler–Einstein多様体やKähler–Ricci流の極限に現れるRicci平坦錐がこの枠組みに入ることを示す。

## 背景と問題設定

Eyssidieux–Guedj–Zeriahiの定義では、もともとlog terminal特異点を仮定することで局所的な標準測度 $d\mu$ を用意し、有界な局所ポテンシャル $u$ について

$$
\omega=\sqrt{-1}\partial\bar\partial u,\qquad
(\sqrt{-1}\partial\bar\partial u)^n=e^{-\lambda u}d\mu
$$

というMonge–Ampère方程式を考える。一方、正則部分だけで滑らかなEinstein計量を指定する定義は、初めからlog terminal性を要求しない。両者の間を埋めることが問題となる。

Definition 1.2のrough Kähler–Einstein空間では、$n$ 次元正規Kähler空間 $X$ の正則部分上の計量に次を要求する。

- $\operatorname{Rc}(\omega)=\lambda\omega$ であり、局所ポテンシャルが有界である。
- $\omega$ は局所的に $X$ 上の滑らかなKähler計量を下から支配する。
- 距離完備化 $\widehat X$ に測度 $\omega^n$ を自明に延長すると、$\operatorname{RCD}(\lambda,2n)$ 空間となる。
- ある $\varepsilon>0$ が存在し、$x\in X$ と $r\in(0,\varepsilon]$ に対して次の体積条件が成り立てば $x\in X^{\mathrm{reg}}$ となる。

$$
\mathcal H^{2n}(B(x,r))\geq(\omega\_{2n}-\varepsilon)r^{2n}.
$$

ここで $\omega\_{2n}$ はEuclid空間の単位球の体積である。最後の条件は、十分小さい球の体積がEuclid的なら中心が正則点であるという条件である。

## 主結果

### 解析的芽のlog terminal性（Theorem 1.3）

rough Kähler–Einstein空間 $(X,\omega)$ の各点 $x$ において、解析的芽 $(X,x)$ はlog terminalである。したがって、各点の近傍では標準因子の適当な正整数倍が線束を定める。

この結論はまず局所的なものである。Remark 1.4が注意するように、非コンパクトな一般の正規Kähler空間では局所指数が非有界となりうるため、各点で $\mathbb Q$-Gorensteinであることから空間全体の一様な指数は自動的には従わない。準射影の場合にはこの問題は生じない。

### コンパクト空間とRicci平坦錐（Theorem 1.5）

上の仮定に加えて、$X$ がコンパクト、または $(X^{\mathrm{reg}},\omega)$ がRicci平坦錐であるとする。このとき $X$ は $\mathbb Q$-Gorensteinかつlog terminalであり、$\omega$ は $X$ 上のKählerカレントへ延長し、Eyssidieux–Guedj–Zeriahiの意味の特異Kähler–Einstein計量となる。

錐の場合にはさらに、体積比が代数的数となる。また、この計量は指定されたReebベクトル場を持つ $X$ 上の一意なRicci平坦Kähler錐計量に一致する。序論は、この存在をCollins–Székelyhidiの先行結果へ結びつけている。

### 非崩壊極限への適用（Theorem 1.6）

Kähler–Einstein多様体列またはKähler–Ricci流列の非崩壊極限として現れるRicci平坦距離錐は、Theorem 1.5の結論を満たす。特に、そのような非崩壊極限の接錐に適用できる。

これは極限計量の存在だけでなく、極限の複素空間が持つ特異点の種類と、強い意味でのEinstein方程式を同時に同定する結果である。

## 証明の見取り図

中心となるのは、各点の近くで上下から制御された多重標準切断の構成である。Donaldson–Sunのピーク切断の方法を用い、非崩壊RCD空間の接錐が距離錐になることを利用する。

初めから $K\_X$ が $\mathbb Q$-線束とは限らないため、Hörmanderの $L^2$ 法で得られる切断はまず正則部分上にしか存在しない。著者らは改良されたKato不等式とRCD仮定から、特異点近傍でも必要な $C^0$・$C^1$ 評価を得る。ほぼ正則なピーク切断を正則切断へ補正し、そのGaussian型の評価を使って特異点を制御する。

最後に、幾何学的極限から生じる錐についてRCD性を含む仮定を確認する。これが抽象的なrough計量の定理を具体的な極限空間に適用する段階となる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2505.01943)
- **Introduction:** [PDF](https://arxiv.org/pdf/2505.01943v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Definition 1.2; Theorems 1.3, 1.5, 1.6; Remarks 1.4, 1.7
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2505.01943v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
