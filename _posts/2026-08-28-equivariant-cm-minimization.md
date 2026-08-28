---
layout: paper
title: "Equivariant CM minimization for extremal manifolds"
title_ja: "extremal多様体に対する同変CM最小化"
authors: "Gabriel Frey"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.DG]
arxiv_abstract: >-
  We prove an equivariant version of the CM minimization conjecture for extremal Kähler manifolds. This involves proving that, given an equivariant punctured family of polarized varieties, a relative version of the CM degree is strictly minimized by an extremal filling. This generalizes a result by Hattori for cscK manifolds with discrete automorphism group by allowing automorphisms and extremal metrics. As a main tool, we extend results by Székelyhidi on asymptotic filtration Chow stability of cscK manifolds with discrete automorphism group to the extremal setting.
topic: algebraic-geometry
tags: [moduli, k-stability, csck-extremal-kahler-metrics]
arxiv_id: "2506.10679v2"
arxiv_url: "https://arxiv.org/abs/2506.10679"
arxiv_submitted: "2025-06-12"
arxiv_updated: "2026-02-19"
summary: >-
  自己同型を持つextremal Kähler多様体へCM最小化を拡張し、適切なtorus twistを除けばextremalな充填がCM次数を厳密に最小化することを示す。これは偏極多様体のモジュライの分離性を、相対的なK安定性とfiltration Chow安定性から捉える結果である。
abstract_en: ""
summary_en: >-
  This work establishes an equivariant CM-degree minimization principle for degenerations whose distinguished fiber is a smooth extremal polarized manifold. A torus twist accounts for continuous automorphisms, after which the extremal model minimizes the relative CM degree, with a precise strictness criterion. The result extends earlier cscK statements that required a discrete automorphism group. Its proof links differences of CM degrees to relative Donaldson–Futaki invariants of good filtrations and develops the needed relative filtration stability.
abstract_ja: >-
  extremal Kähler多様体に対するCM最小化予想の同変版を証明する。同変な偏極多様体の穿孔族に対し、extremalな充填が相対CM次数を厳密に最小化する。自己同型とextremal計量を許すことで、離散自己同型群を持つcscK多様体に関するHattoriの結果を拡張する。主要な道具はSzékelyhidiのfiltrationに関する漸近Chow安定性のextremal設定への拡張である。
abstract_source_url: "https://arxiv.org/abs/2506.10679"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2506.10679v2](https://arxiv.org/abs/2506.10679v2)
- **著者:** Gabriel Frey
- **初回投稿日:** 2025年6月12日
- **最終更新日:** 2026年2月19日
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

偏極多様体のモジュライの分離性は、穿孔円板上の族が持つ充填の一意性に対応する。CM line bundleの次数を用いるCM最小化は、この一意性を数値的に捉える枠組みである。

従来のHattoriの定理は、特殊fiberがcscK計量を持ち自己同型群が離散的な場合を扱った。本論文は最大torusを固定して連続自己同型を許し、さらにcscK計量をextremal計量へ広げる。

結論は、torusの合理的一径部分群によるtwistを施したextremal modelがCM次数を最小化するというものである。等号が起きる場合も、比較modelが何らかのtwistと同型かどうかで特徴づけられる。

## 背景と問題設定

離散付値環$R$上の二つのmodelでは、各CM次数自体よりも両者の差が自然に定義される。自己同型がある場合には通常のK安定性ではなく最大torusに相対的な安定性を使い、twistによる自明な差を除く必要がある。

## 主結果

### 同変CM最小化（Theorem 1.2）

偏極$K$-多様体$(X,L)$の二つの$T$-同変model $(\mathcal X,\mathcal L)$と$(\mathcal X',\mathcal L')$を考え、特殊fiber上の制限torus $T_0$が最大であるとする。$(\mathcal X_0,\mathcal L_0)$が滑らかでextremal計量を持てば、$T$の合理的一径部分群$\xi$が存在して

$$
\operatorname{CM}(\mathcal X_\xi,\mathcal L_\xi)\leq
\operatorname{CM}(\mathcal X',\mathcal L')
$$

となる。不等号が厳密でないのは、比較modelがある一径部分群によるtwistと同型な場合に限る。

### cscKの場合とarc K-polystability（Corollaries 1.3, 1.4）

cscK計量では$\xi$による補正なしのCM最小化が得られる。またextremal偏極多様体の任意の$T$-同変arcについて相対Donaldson–Futaki不変量が非負となり、twistしても非自明なら正になる。

## 証明の見取り図

第一段階で二つのmodelから$T$-不変good filtration $\mathcal F$を作り、ある$\xi$について

$$
\operatorname{DF}_{T_0}(\mathcal F)=
\operatorname{CM}(\mathcal X',\mathcal L')-
\operatorname{CM}(\mathcal X_\xi,\mathcal L_\xi)
$$

と表す。第二段階でextremal特殊fiberに対し$\operatorname{DF}_{T_0}(\mathcal F)\geq0$を示す。Székelyhidiのblowup公式とgraded linear seriesの漸近消滅次数を相対設定へ拡張し、reduced normが正なら厳密な正値性を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2506.10679v2](https://arxiv.org/abs/2506.10679v2)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem 1.2; Corollaries 1.3, 1.4
- **論文構成の説明:** Section 1.3, pp. 4–5
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
