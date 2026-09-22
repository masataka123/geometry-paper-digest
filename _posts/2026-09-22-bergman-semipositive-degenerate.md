---
layout: paper
title: "Bergman Kernel Asymptotics for Semipositive Line Bundles near Curvature-Degenerate Points"
title_ja: "曲率退化点近傍における半正値線束のBergman核漸近"
authors: "Yueh-Lin Chiang"

arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.DG
arxiv_abstract: "We study the asymptotic behavior of Bergman kernels for high tensor powers of semipositive line bundles over Hermitian manifolds. At points where the curvature degenerates, the classical asymptotic expansion may fail. In this paper, we establish a full local asymptotic expansion and rapid off-diagonal decay near degenerate points at which the metric admits a local decoupled model. More generally, we make the following two spectral hypotheses: a localized mild spectral gap for the Kodaira Laplacian and a spectral gap for the rescaled local model. Under these assumptions, we prove a localization property and the rapid off-diagonal decay for the Bergman kernel. Furthermore, if the metric has a local quasi-homogeneous structure, we obtain a full local asymptotic expansion in the $C^\\infty$-topology. As an application, we study pull-backs of positive line bundles under branched coverings. Near a smooth ramification hypersurface, the resulting asymptotic expansion reflects the branching order. Finally, for certain non-quasi-homogeneous models, we still obtain localization and leading-order asymptotics."
topic: several-complex-variables
tags:
  - positivity
  - vector-bundles-sheaves
arxiv_id: "2609.24869v1"
arxiv_url: "https://arxiv.org/abs/2609.24869"
arxiv_submitted: "2026-09-21"
arxiv_updated: "2026-09-21"
summary: "半正値線束の曲率退化点では古典的Bergman核展開が破れるため、異方的rescalingに基づく局所漸近を構成する。spectral gap仮定の下で局所化と急減衰を示し、decoupledまたは準斉次modelでは完全展開を得る。"
abstract_en: ""
summary_en: "This work analyzes high-power Bergman kernels for semipositive line bundles at points where curvature degenerates. Under localized spectral assumptions it proves localization and rapid off-diagonal decay, and a decoupled finite-type model yields a full anisotropically rescaled expansion. Quasi-homogeneous models and pullbacks across branched coverings provide concrete settings and applications."
abstract_ja: "Hermitian多様体上の半正値線束の高tensor冪Bergman核を、曲率が退化する点の近傍で解析する。局所的な緩いspectral gapとrescale modelのspectral gapの下で局所化とoff-diagonal急減衰を証明し、有限型decoupled modelまたは局所準斉次構造の下で完全漸近展開を得る。分岐被覆による正値線束の引き戻しでは、展開が分岐次数を反映する。"
abstract_source_url: "https://arxiv.org/abs/2609.24869"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.24869](https://arxiv.org/abs/2609.24869)
- **著者:** Yueh-Lin Chiang
- **初回投稿日:** 2026-09-21
- **最終更新日:** 2026-09-21
- **主分類・副分類:** math.CV, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

半正値線束の曲率退化点では古典的Bergman核展開が破れるため、異方的rescalingに基づく局所漸近を構成する。spectral gap仮定の下で局所化と急減衰を示し、decoupledまたは準斉次modelでは完全展開を得る。

Hermitian多様体上の半正値線束の高tensor冪Bergman核を、曲率が退化する点の近傍で解析する。局所的な緩いspectral gapとrescale modelのspectral gapの下で局所化とoff-diagonal急減衰を証明し、有限型decoupled modelまたは局所準斉次構造の下で完全漸近展開を得る。分岐被覆による正値線束の引き戻しでは、展開が分岐次数を反映する。

主結果の仮定と結論を区別し、以下ではAbstractとIntroductionに明記された範囲だけを扱う。後続節の証明を独立に検証したものではない。

## 背景と問題設定

正曲率線束ではBergman核の高tensor冪漸近が幾何を精密に反映するが、曲率が退化すると標準scaleと展開が失われる。本論文は退化の各座標方向の有限型次数に応じた異方的scaleを導入し、局所modelへ還元する。

## 主結果

### 局所decoupled modelでの主定理（Theorem I.2）

完備Kähler多様体上の半正値線束 $(L,h)$ を考え、点 $x_0$ で局所weightが有限型decoupled model $\sum_jP_j(z_j)$ を持つとする。$P_j$ の次数を $2m_j$、$S_k(z)=(k^{-1/(2m_1)}z_1,\ldots,k^{-1/(2m_n)}z_n)$ と置くと、随伴束 $L^k\otimes K_X$ のBergman核は

$$B_k(S_kz,S_kw)\sim k^{\sum_j1/m_j}\left(B_0(z,w)+\sum_{q\ge1}k^{-d_q}\Phi_{d_q}(z,w)\right)$$

という局所 $C^\infty$ 完全展開を持つ。また適切に拡大した異方的近傍の外では $O(k^{-\infty})$ のoff-diagonal減衰が成り立つ。

## 証明の見取り図

Kodaira Laplacianの局所的spectral gapによりBergman射影を局所modelへ近似する。異方的scaleでoperatorとkernelを展開し、rescale modelのspectral gapから各係数とremainderを制御する。局所化により遠方の寄与を急減衰させ、準斉次性が全次数の反復構成を可能にする。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.24869](https://arxiv.org/abs/2609.24869)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem I.2 and the general spectral-gap theorems in the Introduction
- **確認したarXivバージョン:** 2609.24869v1
- **確認したライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
