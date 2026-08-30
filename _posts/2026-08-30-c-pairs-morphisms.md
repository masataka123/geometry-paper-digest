---
layout: paper
title: "C-pairs and their morphisms"
title_ja: "C-pairとその射"
authors: "Stefan Kebekus, Erwan Rousseau"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.CV]
arxiv_abstract: >-
  This paper surveys Campana's theory of C-pairs (or "geometric orbifolds") in the complex-analytic setting, to serve as a reference for future work. Written with a view towards applications in hyperbolicity, rational points, and entire curves, it introduces the fundamental definitions of C-pair-theory systematically. In particular, it establishes an appropriate notion of "morphism", which agrees with notions from the literature in the smooth case, but is better behaved in the singular setting and has functorial properties that relate it to minimal model theory.
topic: algebraic-geometry
tags: [singularities, hyperbolicity, vector-bundles-sheaves, minimal-model-program]
arxiv_id: "2407.10668v2"
arxiv_url: "https://arxiv.org/abs/2407.10668"
arxiv_submitted: "2024-07-15"
arxiv_updated: "2024-11-11"
summary: >-
  Campanaの幾何的orbifoldであるC-pairを複素解析的設定で体系化し、特異な場合にも適した射の概念を構成する。adapted reflexive differentialの引き戻しを基準にすることで、滑らかな場合の既存概念と整合しつつ、関手性とMMPとの相性を得る。
abstract_en: ""
summary_en: >-
  The article develops a systematic reference for Campana's geometric orbifolds in complex analytic geometry. It constructs adapted reflexive tensors on suitable covers and uses their pullback behavior to define morphisms of C-pairs. This definition recovers familiar notions in an appropriate smooth setting while retaining useful functorial properties for singular pairs. The framework is designed for later applications to hyperbolicity, entire curves, and arithmetic questions.
abstract_ja: >-
  複素解析的設定におけるCampanaのC-pair理論を体系的に整理する。特にC-pairの射をadapted reflexive differentialの引き戻しによって定義し、滑らかな場合の既存概念との一致、特異な場合の良い挙動、MMPに関係する関手性を確立する。
abstract_source_url: "https://arxiv.org/abs/2407.10668"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2407.10668v2](https://arxiv.org/abs/2407.10668)
- **著者:** Stefan Kebekus, Erwan Rousseau
- **初回投稿日:** 2024年7月15日
- **最終更新日:** 2024年11月11日
- **主分類・副分類:** math.AG, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

C-pair $(X,D)$ はnormal varietyと標準係数をもつ境界

$$
D=\sum_i\frac{m_i-1}{m_i}D_i,\qquad m_i\in\mathbb N_{\geq2}\cup\{\infty\}
$$

の組である。$X$ 自身のKähler微分と $X\setminus D$ の対数微分の間を補間し、分岐被覆、ファイバーの重複度、整曲線の接触条件を一つの形式に記録する。

第1部は適切な被覆上でadapted reflexive tensorを定義し、特異空間でも使える余接構造と引き戻しを整備する。第2部は「標的のadapted reflexive differentialが始域へ引き戻せる」ことをC-pairの射の原理とする。

この定義は所定の滑らかな場合にCampanaの数値的なorbifold morphismと一致するが、特異な場合には一般に異なる。論文はこの差がMMPで自然に生じる特異点を扱う際に重要であると説明する。

## 背景と問題設定

理念的にはC-pair微分は

$$
\Omega_X^p\subseteq\Omega_{(X,D)}^p\subseteq\Omega_X^p(\log D)
$$

を満たし、$D_i$ に沿う分数的極を表す。しかし分数的極は $X$ 上で直接定義できないため、適合する被覆上の反射的層として実現する必要がある。

## 主要な構成と結果

### Adapted reflexive differential

任意の被覆と特異なC-pairにも適用できるadapted reflexive differentialを定義し、穏やかな特異点の下で最適な引き戻し性を与える。この構成からC-pair版の不正則数、Kodaira–Iitaka次元、specialnessも論じる。

### C-pairの射

射 $\varphi:(X,D_X)\to(Y,D_Y)$ を、$Y$ のadapted reflexive differentialが $X$ 上の同種の微分へ引き戻されるという条件で捉える。Introductionは関手性、categorical quotientの存在、MMPの基本概念との関係を主要成果として挙げる。

## 原論文との対応
- **Abstractページ:** [arXiv:2407.10668](https://arxiv.org/abs/2407.10668)
- **Introduction:** Section 1, pp. 2–4
- **論文構成:** Parts I–II, Sections 3–15
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
