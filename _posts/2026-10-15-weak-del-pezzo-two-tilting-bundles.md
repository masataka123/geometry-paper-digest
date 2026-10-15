---
layout: paper
title: Weak del Pezzo surfaces are characterized by the existence of $2$-tilting bundles
title_ja: 2-tilting束による弱del Pezzo曲面の特徴づけ
authors: Ryu Tomonaga
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AC
- math.RA
- math.RT
arxiv_abstract: For $d\geq1$, a tilting bundle on a regular proper $d$-dimensional variety over a field is called $d$-tilting if its endomorphism algebra has global dimension $d$, the smallest possible value. We prove that, over any field, the existence of a $d$-tilting bundle implies that the anticanonical bundle is semiample and big, and hence the variety is weak Fano. Moreover, the endomorphism algebra is $d$-representation tame. Conversely, every weak del Pezzo surface over an algebraically closed field of arbitrary characteristic admits a $2$-tilting bundle. Thus a smooth projective surface over such a field admits a $2$-tilting bundle if and only if it is a weak del Pezzo surface. This proves the variety case of Chan's conjecture, originally formulated in characteristic zero, and extends it to arbitrary characteristic. As an application, we construct a non-commutative crepant resolution (NCCR) of the anticanonical ring of any regular proper $d$-dimensional variety over any field admitting
  a $d$-tilting bundle. The NCCR is the endomorphism algebra of the pulled-back bundle on the total space of the canonical bundle. In particular, we obtain NCCRs of anticanonical cones over Du Val del Pezzo surfaces over algebraically closed fields of arbitrary characteristic. These NCCRs are the $3$-Calabi--Yau completions of the endomorphism algebras of $2$-tilting bundles on the minimal resolutions, extending the known construction for smooth del Pezzo surfaces to the Du Val case.
topic: algebraic-geometry
tags:
- fano-varieties
- vector-bundles-sheaves
- positivity
- singularities
arxiv_id: 2510.26199v4
arxiv_url: https://arxiv.org/abs/2510.26199
arxiv_submitted: '2025-10-30'
arxiv_updated: '2026-10-14'
summary: 代数閉体上の滑らかな射影曲面が2-tilting束をもつことと、弱del Pezzo曲面であることの同値を任意標数で示す。一般次元ではd-tilting束の存在から反標準束の半豊富性とbignessを導き、反標準環の非可換crepant解消へ応用する。
abstract_en: ''
summary_en: The global dimension of the endomorphism algebra of a tilting bundle imposes restrictions on its underlying variety. The paper studies the extremal case in which this dimension equals the geometric dimension. It proves positivity of the anticanonical bundle in that case and constructs the required tilting bundles on every weak del Pezzo surface over an algebraically closed field. Pulling the bundles to canonical total spaces then produces noncommutative resolutions of anticanonical rings.
abstract_ja: d次元のregular proper多様体上で、自己準同型環の大域次元がdとなるtilting束の存在を調べる。その存在は反標準束の半豊富性とbignessを強制し、弱Fano性を導く。代数閉体上の曲面では逆も成立し、任意標数の弱del Pezzo曲面に2-tilting束を構成する。さらに標準束の全空間へ引き戻したtilting束から反標準環の非可換crepant解消を得て、Du Val del Pezzo曲面の反標準錐にも適用する。
abstract_source_url: https://arxiv.org/abs/2510.26199
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2510.26199v4](https://arxiv.org/abs/2510.26199)
- **著者:** Ryu Tomonaga
- **初回投稿日:** 2025-10-30
- **最終更新日:** 2026-10-14
- **主分類・副分類:** math.AG（主分類）; math.AC, math.RA, math.RT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

tilting束は、幾何学的な導来圏を有限次元代数の加群の導来圏へ移す道具である。その自己準同型環の大域次元は、元の多様体の次元以上になる。下限に一致する特別な場合が、ここでいうd-tilting束である。

本論文は、この最小の大域次元という代数的条件から、反標準束が半豊富かつbigになるという幾何学的正値性を導く。曲面ではさらに逆向きの構成が可能であり、2-tilting束の存在が弱del Pezzo曲面をちょうど特徴づける。

同値は代数閉体上の任意標数で成立する。Chanの予想の多様体の場合を解決し、標数0に限定されていた定式化を拡張する。また標準束の全空間を経由して、特異な反標準錐の非可換crepant解消を作る。

## 背景と問題設定

tilting束$E$は

$$
D^b(\operatorname{Coh}X)\simeq D^b(\operatorname{mod}\operatorname{End}_X(E))
$$

を与える。滑らかなproperな$d$次元多様体では$d\le\operatorname{gl.dim}\operatorname{End}_X(E)\le2d$であり、左の等号が成り立つ束をd-tiltingと呼ぶ。一般のtilting束の存在より強い条件である。以下のIntroductionの定理は代数閉体上で述べられ、必要方向などは本文では任意の体上のregular proper多様体へ一般化される。

## 主結果

### 引戻しによる判定（Theorem 0.1）

$\pi:\operatorname{Tot}(\omega_X)\to X$を標準束の全空間への射影とすると、$E$がd-tiltingであることと$\pi^*E$が全空間上でtiltingであることは同値である。このとき$\operatorname{End}_X(E)$はd-representation infiniteとなる。この判定は幾何と高次Auslander–Reiten理論をつなぐ。

### 反標準束の正値性（Theorem 0.3）

滑らかなproperな$d\ge1$次元多様体$X$にd-tilting束が存在すると、$\omega_X^{-1}$は半豊富かつbigとなる。さらに

$$
H^i(X,\omega_X^{-n})=0\qquad(i>0,\ n\ge0)
$$

が成り立ち、自己準同型環はd-representation tameとなる。単なるnef性より強い半豊富性を含み、曲面の場合には弱del Pezzo性と有理性を導く。

### 曲面での逆と同値（Theorem 0.4・Corollary 0.5）

任意標数の代数閉体上の弱del Pezzo曲面には、$\mathcal O_X$を直和因子にもつ2-tilting束が存在する。したがって滑らかな射影曲面について

$$
X\text{が2-tilting束をもつ}\quad\Longleftrightarrow\quad -K_X\text{がnefかつbig}
$$

となる。すべての有理曲面に一般のtilting束が存在するという既知の結果だけでは、このより強い条件は従わない。

### 非可換crepant解消（Theorems 0.6–0.7）

$E$をd-tilting束、$T=\operatorname{Tot}_X(\omega_X)$とおく。反標準環

$$
R=\bigoplus_{n\ge0}H^0(X,\omega_X^{-n})
$$

は$(d+1)$次元のGorenstein正規整域となり、

$$
\operatorname{End}_T(\pi^*E)\cong\operatorname{End}_R\bigl(\Gamma(T,\pi^*E)^{**}\bigr)
$$

は$R$の非可換crepant解消である。Du Val del Pezzo曲面に対しては最小解消で得られる弱del Pezzo曲面上の2-tilting束を用い、その反標準環のNCCRを構成する。この代数は対応する自己準同型環の3-Calabi–Yau完備化として記述される。

## 証明の見取り図

Introductionが示す構成の骨格は、d-tilting条件を標準束の全空間への引戻しと結びつけ、そこから反標準環を扱うというものである。曲面の逆方向では構造層を含む束の構成が重要となり、最小解消と組み合わせてDu Val錐へ進む。

付録では弱del Pezzo曲面上のrigid torsion-free層の構造定理を任意標数へ拡張する。正標数では滑らかな反標準曲線が存在するとは限らないため、整な反標準曲線を使うと説明される。束の構成や消滅定理の細部を、Introduction以上に再構成することはしない。

## 原論文との対応

- **Abstractページ:** [Weak del Pezzo surfaces are characterized by the existence of $2$-tilting bundles](https://arxiv.org/abs/2510.26199)
- **Introduction:** [PDF](https://arxiv.org/pdf/2510.26199v4) — Introduction, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 0.1, 0.3–0.4, 0.6–0.7; Corollary 0.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2510.26199v4
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
