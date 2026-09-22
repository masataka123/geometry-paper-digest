---
layout: paper
title: "Kähler-Einstein cone metrics and parabolic bundles"
title_ja: "Kähler–Einstein錐計量とparabolic束"
authors: "Martin de Borbon"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: "Let $X$ be a compact Kähler manifold, let $D=\\sum_iD_i$ be a simple normal crossing divisor, and fix $β_i\\in(0,1)$. We introduce a parabolic structure $TX_*$ on $TX$, given along each $D_i$ by the filtration $0\\subset TD_i\\subset TX|_{D_i}$ with weight $w_i=1-β_i$ on the normal quotient. If $X\\setminus D$ carries a Kähler--Einstein metric $ω$ with cone angle $2πβ_i$ along $D_i$, we show that $TX_*$ is parabolic polystable with respect to $[ω]$. When the Einstein constant $λ$ is non-zero, we introduce parabolic structures on the Tian extension ($λ>0$) and on Simpson's canonical Higgs bundle ($λ<0$), and prove that these are polystable too. Combined with the Bogomolov--Gieseker inequality for parabolic bundles, this yields a Miyaoka--Yau inequality for these pairs."
topic: differential-geometry
tags:
  - kahler-einstein-metrics
  - vector-bundles-sheaves
  - stability
  - chern-classes
arxiv_id: "2609.24597v1"
arxiv_url: "https://arxiv.org/abs/2609.24597"
arxiv_submitted: "2026-09-21"
arxiv_updated: "2026-09-21"
summary: "単純正規交差因子に沿うKähler–Einstein錐計量から接束、Tian拡大、標準Higgs束のparabolic多重安定性を導く。結果として対 $(X,\\Delta)$ の明示的なChern類に対するMiyaoka–Yau不等式を証明する。"
abstract_en: ""
summary_en: "The paper associates parabolic structures to the tangent bundle of a compact Kähler manifold carrying a cone Kähler–Einstein metric away from a simple normal crossing divisor. It proves parabolic polystability for the tangent bundle and, according to the sign of the Einstein constant, for a Tian extension or a canonical Higgs bundle. Parabolic Bogomolov–Gieseker inequalities then yield a Miyaoka–Yau inequality with explicitly defined logarithmic Chern classes."
abstract_ja: "単純正規交差因子に沿って錐角を持つKähler–Einstein計量から、接束に自然なparabolic構造を入れ、そのparabolic多重安定性を証明する。Einstein定数が正ならTian拡大、負ならSimpsonの標準Higgs束にもparabolic構造を入れて多重安定性を得る。これをparabolic Bogomolov–Gieseker不等式と組み合わせ、実数係数境界を許すMiyaoka–Yau不等式を導く。"
abstract_source_url: "https://arxiv.org/abs/2609.24597"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.24597](https://arxiv.org/abs/2609.24597)
- **著者:** Martin de Borbon
- **初回投稿日:** 2026-09-21
- **最終更新日:** 2026-09-21
- **主分類・副分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

単純正規交差因子に沿うKähler–Einstein錐計量から接束、Tian拡大、標準Higgs束のparabolic多重安定性を導く。結果として対 $(X,\Delta)$ の明示的なChern類に対するMiyaoka–Yau不等式を証明する。

単純正規交差因子に沿って錐角を持つKähler–Einstein計量から、接束に自然なparabolic構造を入れ、そのparabolic多重安定性を証明する。Einstein定数が正ならTian拡大、負ならSimpsonの標準Higgs束にもparabolic構造を入れて多重安定性を得る。これをparabolic Bogomolov–Gieseker不等式と組み合わせ、実数係数境界を許すMiyaoka–Yau不等式を導く。

主結果の仮定と結論を区別し、以下ではAbstractとIntroductionに明記された範囲だけを扱う。後続節の証明を独立に検証したものではない。

## 背景と問題設定

滑らかなコンパクトKähler–Einstein多様体では接束が多重安定であり、正負のEinstein定数に応じたTian拡大やSimpson Higgs束からMiyaoka–Yau不等式が得られる。本論文はこの図式を単純正規交差因子に沿う任意実錐角へ移す。

## 主結果

### 多重安定性（Theorems A–C）

$D=\sum D_i$、$w_i=1-\beta_i$ とし、$X\setminus D$ 上に角度 $2\pi\beta_i$ のKähler–Einstein錐計量 $\omega$ があるとする。接束のnormal方向にweight $w_i$ を置いた $TX_*$ は $[\omega]$ に関してparabolic多重安定である。$\operatorname{Ric}(\omega)=\lambda\omega$ で $\lambda>0$ ならTian拡大が、$\lambda<0$ なら $\mathcal O_X\oplus TX$ の標準Higgs束が対応するparabolic構造の下で多重安定となる。

### Miyaoka–Yau不等式（Theorem D）

$n\ge2$ なら

$$\bigl(2(n+1)c_2(X,\Delta)-n c_1(X,\Delta)^2\bigr)\cdot[\omega]^{n-2}\ge0$$

が成り立つ。

## 証明の見取り図

錐計量に一様適合するHermitian計量について、飽和部分層の解析的degreeとparabolic degreeを同一視するChern–Weil公式を確立する。これをHermitian–Einstein接続へ適用して各束の多重安定性を示し、parabolic Chern類を計算してBogomolov–Gieseker不等式へ代入する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.24597](https://arxiv.org/abs/2609.24597)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems A, B, C, D
- **確認したarXivバージョン:** 2609.24597v1
- **確認したライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
