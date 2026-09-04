---
layout: paper
title: "Nonuniqueness of Model Potentials and Weak Geodesic Rays"
title_ja: "モデルポテンシャルと弱測地線rayの非一意性"
authors: "Xia Xiao"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  We establish two nonuniqueness phenomena on $\mathbb{CP}^1$. First, distinct normalized positive-mass model potentials can have the same non-pluripolar Monge--Ampère measure. By the contact-set formula, their zero-contact sets agree $\omega_{\mathrm{FS}}$-almost everywhere. Moreover, both have zero Lelong number at every point and identical multiplier ideal sheaves at every positive scale. Second, we construct distinct maximal test curves whose zero-contact sets agree pointwise at every parameter. Their inverse Legendre transforms are distinct bounded weak geodesic rays from zero with the same pointwise right initial tangent.
topic: differential-geometry
tags:
  - pluripotential-theory
  - monge-ampere-equations
  - multiplier-ideals-extension
arxiv_id: "2609.03296v1"
arxiv_url: "https://arxiv.org/abs/2609.03296"
arxiv_submitted: "2026-09-03"
arxiv_updated: "2026-09-03"
summary: >-
  $\mathbb{CP}^1$ 上で、非多重極Monge--Ampère測度、Lelong数、全倍率イデアルが一致してもモデルポテンシャルは一意に決まらないことを示す。さらに同じ点ごとの右初期接ベクトルを持つ相異なる有界弱測地線rayを構成し、二つの自然な一意性問題へ反例を与える。
abstract_en: ""
summary_en: >-
  The article constructs two counterexamples on the projective line. It shows that non-pluripolar Monge--Ampère data can fail to distinguish normalized positive-mass model potentials even after Lelong numbers and multiplier ideals are fixed. Through maximal test curves and Legendre duality, it also produces different bounded weak geodesic rays sharing the same pointwise initial tangent.
abstract_ja: >-
  $\mathbb{CP}^1$ 上で二種類の非一意性を示す。第一に、相異なる正規化された正質量モデルポテンシャルが同じ非多重極Monge--Ampère測度を持ち、零接触集合がほとんど至る所一致するうえ、各点のLelong数と全正尺度の倍率イデアル層も一致する。第二に、各パラメータで零接触集合が点ごとに一致する相異なる極大test curveを構成し、その逆Legendre変換として同じ右初期接ベクトルを持つ相異なる有界弱測地線rayを得る。
abstract_source_url: "https://arxiv.org/abs/2609.03296"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.03296](https://arxiv.org/abs/2609.03296)
- **著者:** Xia Xiao
- **初回投稿日:** 2026年9月3日
- **最終更新日:** 2026年9月3日
- **主分類・副分類:** math.DG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kählerポテンシャル空間の測地線方程式は斉次複素Monge--Ampère方程式として表される。一方、特異ポテンシャルは非多重極積と特異型を指定したMonge--Ampère方程式で扱われる。本論文は、測度や初期接ベクトルという自然なデータが対象を一意に決めるかを問う。

第一の反例では、$\mathbb{CP}^1$ 上の相異なる正質量モデルポテンシャルが、同一の非多重極Monge--Ampère測度を持つ。それらはすべての点でLelong数が零であり、任意の正尺度で倍率イデアル層も自明かつ同一である。

第二の反例では、相異なる極大test curveの零接触集合を各パラメータで完全に一致させる。逆Legendre変換で得られる二本の有界弱測地線rayは、出発点も点ごとの右初期接ベクトルも同一だが、rayとしては一致しない。

## 背景と問題設定

正規化モデルポテンシャル $v$ に対する接触集合公式は

$$
\left\langle(\omega+dd^cv)^n\right\rangle
=\mathbf 1_{\{v=0\}}\omega^n
$$

を与える。このため測度の一致は零接触集合のほとんど至る所での一致に等しい。また、弱測地線ray $u_t$ とそのLegendre変換 $\widehat u_\tau$ には

$$
\{\dot u_0\ge\tau\}=\{\widehat u_\tau=0\}
$$

という関係がある。したがって二つの一意性問題は、ともに零接触データが特異ポテンシャルをどこまで復元するかに帰着する。

## 主結果

### モデルポテンシャルの非一意性（Theorem A）

任意の $0<\rho<1$ に対し、相異なる正規化正質量モデルポテンシャル $\varphi,\psi\in\operatorname{PSH}(\mathbb{CP}^1,\omega_{\mathrm{FS}})$ と閉Fubini--Study円板 $C$ が存在し、

$$
\langle\omega_{\mathrm{FS}}+dd^c\varphi\rangle
=\langle\omega_{\mathrm{FS}}+dd^c\psi\rangle
=\mathbf1_C\omega_{\mathrm{FS}},
\qquad \int_C\omega_{\mathrm{FS}}=1-\rho>0
$$

を満たす。さらに全点 $x$ と全 $c>0$ に対し

$$
\nu(\varphi,x)=\nu(\psi,x)=0,
\qquad
\mathcal I(c\varphi)=\mathcal O_{\mathbb{CP}^1}=\mathcal I(c\psi)
$$

である。

### 同じ初期接ベクトルを持つ弱測地線ray（Theorem B）

相異なる有界弱測地線ray $(u_t)_{t\ge0}$ と $(v_t)_{t\ge0}$ が存在し、

$$
u_0=v_0=0,
\qquad \dot u_0(x)=\dot v_0(x)\quad(x\in\mathbb{CP}^1)
$$

を満たす。各有限時刻のsliceは有界で、両rayの複素化は斉次複素Monge--Ampère方程式を解く。ここで冒頭の式の $u_0$ は原論文どおり $u_0$ を意味する。

## 証明の見取り図

円板上で零となり、外部で極を持つ明示的なcap modelから出発する。Vitali packingで極部分の質量を再配置しても非多重極測度を変えず、さらに極平均化で残余曲率を非原子的にする。rayについては、各パラメータで零接触集合が同じ相異なる極大test curveを構成し、Legendre対応と初期接触集合の公式を適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.03296](https://arxiv.org/abs/2609.03296)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems A, B; Proposition 5.1
- **論文構成の説明:** Introduction, p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
