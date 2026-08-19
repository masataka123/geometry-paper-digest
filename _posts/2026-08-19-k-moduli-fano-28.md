---
layout: paper
title: "K-moduli of Fano threefolds of rank 2 and degree 28"
title_ja: "階数2・次数28のFano三次元多様体のK-moduli"
authors: "Joseph Malbon"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We find all possible K-polystable degenerations of smooth K-polystable Fano threefolds in the family \textnumero2.21, and describe the component of the moduli space $M^\text{K-ps}_{3,28}$ which parametrises this family.
topic: algebraic-geometry
tags:
  - fano-varieties
  - k-stability
  - moduli
  - singularities
  - birational-geometry
arxiv_id: "2608.17113v1"
arxiv_url: "https://arxiv.org/abs/2608.17113"
arxiv_submitted: "2026-08-17"
arxiv_updated: "2026-08-17"
summary: >-
  Picard階数2・反標準次数28のFano三次元多様体族No. 2.21について、K-polystableな退化をすべて分類し、そのK-moduli成分を記述する。境界は鎖状に交わる3本の射影直線からなり、各stratumをquadricに沿う具体的なblow-upとして同定する。
abstract_en: ""
summary_en: >-
  The paper determines the K-polystable boundary of the moduli component containing smooth Fano threefolds of Mori–Mukai family No. 2.21. These threefolds have Picard rank two and anticanonical volume twenty-eight. The boundary consists of three rational curves with a chain-like incidence pattern, and every stratum receives an explicit blow-up description. The construction uses families over a blown-up parameter plane, proves K-polystability of their fibers, and identifies the resulting finite quotient with the K-moduli component.
abstract_ja: >-
  Mori–Mukai族No. 2.21の滑らかなK-polystable Fano三次元多様体が持つK-polystable退化をすべて求め、それらをparameterizeする $M^{\mathrm{K-ps}}_{3,28}$ の成分を記述する。境界の3成分と交点を具体的なquadricおよび次数4曲線に沿うblow-upとして分類し、この族のmodular compactificationを与える。
abstract_source_url: "https://arxiv.org/abs/2608.17113"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.17113](https://arxiv.org/abs/2608.17113)
- **著者:** Joseph Malbon
- **初回投稿日:** 2026年8月17日
- **最終更新日:** 2026年8月17日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

K-stabilityはFano多様体の射影的moduli空間を構成する枠組みを与えるが、個々の変形族について境界点がどの特異Fano多様体を表すかを具体化するには、退化の分類とK-polystabilityの判定が必要になる。本論文はMori–Mukai族No. 2.21のK-moduli成分を完全に記述する。

この族の滑らかな元は、滑らかなquadric三次元多様体を有理正規四次曲線に沿ってblow-upしたもので、$(-K_X)^3=28$、$\rho(X)=2$ を満たす。一般元がK-stableであることは既知であり、対応するmoduli成分は射影曲面である。

主結果は、その曲面の境界が3本の $\mathbb P^1$ からなり、中央の成分が他の2本とそれぞれ一点で交わり、外側同士は交わらないことを示す。各開stratumと二つの交点には、特異quadricまたは滑らかなquadricを、可約あるいは非reducedな次数4曲線に沿ってblow-upした具体的なmodular解釈が付く。

したがって、No. 2.21へ $\mathbb Q$-Gorenstein smoothableなK-polystable $\mathbb Q$-Fano三次元多様体は、次数4・算術種数0の連結曲線に沿うquadric超曲面のblow-upとして得られる。

## 背景と問題設定

No. 2.21は

$$
(-K_X)^3=28,\qquad \rho(X)=2
$$

で特徴づけられる。滑らかな部分は自然なparameter spaceのGIT quotientの開集合として理解できるが、そのGIT compactificationにはK-polystableでない対象も含まれる。本論文の目的は、K-polystable退化だけをparameterizeする別のcompactificationを作り、境界を幾何学的に同定することである。

## 主結果

### K-moduli境界の記述（Theorem 2）

成分 $M_{\mathrm{No.\,2.21}}$ の滑らかなlocusを $M^{\mathrm{sm}}$ とすると、境界

$$
\partial M_{\mathrm{No.\,2.21}}=M_{\mathrm{No.\,2.21}}\setminus M^{\mathrm{sm}}
$$

は3成分 $\Delta_1,\Delta_2,\Delta_3\simeq\mathbb P^1$ を持つdivisorであり、$\Delta_1\cap\Delta_3=\varnothing$、$\Delta_2$ は他の各成分と一点で交わる。

$\Delta_1^\circ$ は孤立特異点を持つquadric $Q_{\mathrm{iso}}$ を有理正規四次曲線でblow-upしたもの、$\Delta_2^\circ$ は滑らかなquadricを2直線とconicの和に沿ってblow-upしたもの、$\Delta_3^\circ$ は特異quadricを一点で横断的に交わる2 conicに沿ってblow-upしたものをparameterizeする。端点 $\Delta_{12}$ と $\Delta_{23}$ もIntroductionで一意なK-polystable blow-upとして明示される。特に、対象となる任意の退化は次数4・算術種数0の連結曲線に沿うquadricのblow-upである（Corollary 3）。

## 証明の見取り図

Introductionでは、$\mathbb P^2$ の6点blow-up $T$ の開被覆上にflatな射影族を構成する方針が説明される。各fiberのK-polystabilityはAbban–Zhuangのadmissible flag法とFujita–Liのvaluative criterionを用い、適切な自己同型群に不変な素因子 $D$ について

$$
A_X(D)>S(-K_X;D)
$$

を確認して示す。族から得る射を貼り合わせ、有限群 $\Gamma$ のfiber同型軌道を割ることで $T/\Gamma\to M_{\mathrm{No.\,2.21}}$ を得る。通常二重点を持つfiberでは変形の非障害性からmoduliの正規性を得て、唯一の非terminal fiberについても別途非障害性を示すことで、この全単射射が同型だと結論する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.17113](https://arxiv.org/abs/2608.17113)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Definition 1, Theorem 2, Corollary 3
- **論文構成の説明:** pp. 3–4（Structure of the paper）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction
