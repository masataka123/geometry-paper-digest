---
layout: paper
title: "Failure of semipositive metric extension in a smooth projective family"
title_ja: "滑らかな射影族における半正値計量延長の失敗"
authors: "Xiangsen Qin"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We construct a smooth projective family of rational surfaces, an effective line bundle on its total space, and a prescribed semipositively curved singular Hermitian metric on the central fibre that has no semipositive extension to any neighbourhood of that fibre. It has analytic singularities and is of minimal singularity type. The failure persists even when the restriction is only required to have the same singularity type as the prescribed metric. The family is obtained by blowing up four disjoint sections of a product, with three points becoming collinear on the central fibre. An integrable adjoint section on that fibre cannot extend because the corresponding adjoint systems vanish on every nearby fibre. This gives a negative answer to Păun's metric-extension question, listed as Question 38 by Dinew, Guedj, and Zeriahi.
topic: algebraic-geometry
tags:
  - positivity
  - multiplier-ideals-extension
  - birational-geometry
arxiv_id: "2609.36410v1"
arxiv_url: "https://arxiv.org/abs/2609.36410"
arxiv_submitted: "2026-09-29"
arxiv_updated: "2026-09-29"
summary: >-
  有理曲面の滑らかな射影族と全空間上の有効線束を構成し、中心ファイバー上の最小特異性をもつ半正曲率特異Hermite計量が近傍へ半正値に延長できないことを示す。中心ファイバーだけで三点が共線になる四点blow-upと、随伴切断の延長障害が反例を与える。
abstract_en: ""
summary_en: >-
  This paper constructs a smooth projective family of rational surfaces carrying an effective line bundle whose central fiber has a distinguished semipositively curved singular metric. Despite having analytic and minimal singularities, that metric cannot extend semipositively to any neighborhood of the fiber, even up to bounded change of weights. The obstruction converts a hypothetical metric extension into extension of an integrable adjoint section. A four-point blow-up is arranged so that such a section exists centrally but all corresponding systems vanish nearby.
abstract_ja: >-
  有理曲面の滑らかな射影族、その全空間上の有効線束、中心ファイバー上の半正曲率特異Hermite計量を構成する。この計量は解析的かつ最小の特異性をもつが、中心ファイバーのどの近傍にも半正値に延長できない。同じ特異性型だけを要求しても失敗し、Păunの計量延長問題に否定的解答を与える。
abstract_source_url: "https://arxiv.org/abs/2609.36410"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.36410](https://arxiv.org/abs/2609.36410)
- **著者:** Xiangsen Qin
- **初回投稿日・最終更新日:** 2026年9月29日
- **主分類・副分類:** math.AG, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

線束上の特異Hermite計量の半正曲率は局所重みの多重劣調和性に対応する。Păunの問題は、滑らかなKähler族の一ファイバー上に与えた半正値特異計量を全空間へ延長できるかを問う。

本論文は滑らかな射影族でも答えが否定的であることを示す。反例の計量は解析的特異性と最小特異性をもち、厳密な延長だけでなく、制限が同じ特異性型になる延長も存在しない。

## 背景と問題設定

$\mathbb P^2\times\Delta$ の互いに交わらない四つのsectionをblow-upする。$t\ne0$ では四点のどの三点も共線でないが、中心ファイバーでは三点が共線になる。この退化が、中心と近傍で随伴線形系の振る舞いを変える。

## 主結果

### 半正値計量の局所非延長（Theorem A）

有理曲面をファイバーにもつ滑らかな射影射 $\pi:X\to\Delta$、有効線束 $L$、中心ファイバー上の半正曲率特異計量 $h_0=e^{-\varphi_0}$ が存在する。$h_0$ は解析的かつ最小の特異性をもち、滑らかな有理曲線に沿うLelong数は $1/2$ である。それにもかかわらず、$X_0$ のどの近傍にも、制限重み $\psi$ が $\psi\ge\varphi_0-C$ を満たす半正値計量は存在しない。

## 証明の見取り図

四点blow-upで $L=2H-E_1-E_2-E_3-E_4$ と置く。中心では共線三点のstrict transform $\ell$ を使い、$2L_0=A+\ell$ というZariski分解からLelong数 $1/2$ の計量を作る。もし計量が延長すれば、$L^2$ 拡張定理により中心上の可積分な随伴切断も延長する。一方、近傍ファイバーでは $L_t$ がnefで

$$
(K_{X_t}+mL_t)\cdot L_t=-2
$$

となるため $H^0(X_t,K_{X_t}+mL_t)=0$ であり、延長と矛盾する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.36410](https://arxiv.org/abs/2609.36410)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem A
- **論文構成の説明:** Introduction, p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
