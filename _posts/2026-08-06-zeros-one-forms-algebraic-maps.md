---
layout: paper
title: "Zeros of one-forms and the topology of algebraic maps"
title_ja: "1形式の零点と代数的写像の位相"
authors: "Stefan Schreieder, Botong Wang"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
topic: algebraic-geometry
arxiv_id: "2607.15102v1"
arxiv_url: "https://arxiv.org/abs/2607.15102v1"
arxiv_submitted: "2026-07-16"
arxiv_updated: "2026-07-16"
summary: >-
  円周上に滑らかにファイバー化するにもかかわらず、すべての正則1形式が零点をもつ滑らかな複素射影多様体を構成し、Kotschick予想に反例を与える。Albanese写像がhomotopy fiber bundleだがsubmersionではない例と、Aomoto複体による条件の限界も示す。
abstract_en: ""
summary_en: >-
  The authors construct smooth complex projective varieties that separate several proposed topological and holomorphic criteria for zero-free one-forms. One example fibers smoothly over the circle even though none of its holomorphic one-forms is everywhere nonzero; its Albanese map is a homotopy fiber bundle but fails to be a submersion. Another example satisfies exactness conditions for Aomoto complexes on all connected finite étale covers while admitting no zero-free real closed one-form. These constructions disprove three conjectural implications discussed in the Introduction.
abstract_ja: >-
  円周上の滑らかなファイバー束構造と、零点をもたない正則1形式の存在とが同値ではないことを、滑らかな複素射影多様体の具体的構成によって示す。さらに、Albanese写像のhomotopy fiber bundle性がsubmersion性を導かない例、および有限étale被覆上のAomoto複体の完全性だけでは零点のない実閉1形式を保証しない例を構成する。
abstract_source_url: "https://arxiv.org/abs/2607.15102v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.15102v1](https://arxiv.org/abs/2607.15102v1)
- **著者:** Stefan Schreieder, Botong Wang
- **初回投稿日:** 2026年7月16日
- **最終更新日:** 2026年7月16日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG); Complex Variables (math.CV)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## イントロダクションの日本語要約

コンパクトKähler多様体 $X$ に零点をもたない正則1形式が存在すれば、その実部などから零点をもたない実閉1形式が得られる。Kotschick予想は逆も成り立つか、すなわち円周 $S^1$ 上の滑らかなファイバー束であるという位相的条件が零点のない正則1形式を強制するかを問うていた。

この予想は複素次元2と3では知られており、Hodge数やChern数への制約も両条件で一致する。また、滑らかな写像 $X\to S^1$ をharmonic heat flowで調和写像へ変形する発想も予想を支持していた。しかし本論文は、高次元ではこの対応が破れることを示す。

Theorem 1.1は7次元の滑らかな複素射影多様体 $X$ を構成する。そのAlbanese写像はhomotopy fiber bundleであり、$X$ は $S^1$ 上に滑らかにファイバー化する。さらに任意の非零実1次コホモロジー類は零点のない閉1形式で表せるが、Albanese写像はsubmersionではなく、すべての正則1形式は零点をもつ。

したがって、Bobadilla--Kollár予想に残っていた「homotopy fiber bundleならsubmersion」という含意が反証され（Corollary 1.2）、Kotschick予想の逆向きも反証される（Corollary 1.3）。著者らは、調和代表が常に零点をもつ一方で各非零実クラスには零点のない別の代表がある、という強い形で差を示す。

構成はCorrêa--Kollárによるhomology fiber bundleの局所的反例を大域化し、blow-up trickを組み合わせる。Whiteheadの定理でhomotopy fiber bundle性を確認し、LatourおよびFarrellの結果を使って閉1形式と円周上のファイバー化を制御する、という方針がIntroductionに説明される。

もう一つの問題は、有限étale被覆上で正則1形式との外積からなるAomoto複体がすべての次数で完全なら、零点のない正則1形式が存在するかというものだった。Theorem 1.4は5次元の滑らかな複素射影多様体で、このAomoto条件を満たすにもかかわらず、すべての実閉1形式が零点をもつ例を与える。

後者はDebarre--Jiang--Lahozの「複素トーラスではない有理コホモロジートーラス」とblow-up trickに基づく。無限巡回被覆の $\mathbb F_2$-コホモロジーが無限次元になることから、円周上に滑らかにファイバー化できないことを示す。

以上は、正則1形式の零点、Albanese写像の微分位相、実閉1形式、Aomoto複体の間に期待されていた含意を複数切り離す。論文はこれらの反例を主張しており、低次元で成立する既知結果そのものを否定するものではない。

## 論文の主要ポイント

- 円周上に滑らかにファイバー化するが、零点のない正則1形式をもたない射影多様体を構成する（Theorem 1.1）。
- Kotschick予想を反証する（Corollary 1.3）。
- homotopy fiber bundleであるAlbanese写像がsubmersionでない例を与え、Bobadilla--Kollár予想の残る含意を反証する（Corollary 1.2）。
- すべての有限étale被覆上でAomoto複体が完全でも、零点のない実閉1形式が存在しない例を構成する（Theorem 1.4）。
- 二つの構成でblow-up trickを使い、基本群とファイバー化の位相を制御する。

## 論文の構成

Introduction後、Section 2でblow-upの下でsubmersion性とhomology fiber bundle性を比較する。Section 3でTheorem 1.1、後続部分でAomoto複体に関するTheorem 1.4の構成を扱う。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.15102v1](https://arxiv.org/abs/2607.15102v1)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Corollaries 1.2–1.3, Theorem 1.4
- **論文構成の説明:** Introduction, pp. 2–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
