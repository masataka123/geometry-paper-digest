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
tags: []
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

## 要約

零点のない正則1形式をもつことと、零点のない実閉1形式をもつことは、コンパクト Kähler 多様体で同値かという Kotschick 予想に反例を与える。構成される7次元滑らかな複素射影多様体は円周上に滑らかにファイバー化するが、全ての正則1形式が零点をもつ。

同じ例の Albanese morphism は homotopy fiber bundle だが submersion ではなく、Bobadilla--Kollár 予想の残っていた含意も反証する。さらに任意の非零実1次 cohomology class は零点のない閉1形式で表せる一方、その harmonic representative は常に零点をもつ。

別の5次元構成は、全ての connected finite étale cover 上で所定の Aomoto complex が完全になる正則1形式をもつにもかかわらず、零点のない実閉1形式を一つももたない。したがって正則1形式の零点、Albanese morphism の位相、実閉1形式、Aomoto complex の間に予想されていた複数の含意が高次元では分離する。

## 背景と問題設定

コンパクト Kähler 多様体 $X$ について、Introduction は次の条件を比較する。

- (A) $X$ は零点のない正則1形式をもつ。
- (B) $X$ は零点のない実閉1形式をもつ。
- (B') $X$ は $S^1$ 上の smooth fiber bundle である。

(A) は (B) を導き、Tischler の定理により (B) と (B') は同値である。Kotschick 予想は逆向き (B) $\Rightarrow$ (A) を問う。複素次元2、3では知られているが、本論文は高次元で失敗することを示す。

Bobadilla--Kollár 予想は、円板への projective morphism について submersion、homotopy fiber bundle、$\mathbb Z$-homology fiber bundle の同値性を予想した。既知の容易な含意は submersion $\Rightarrow$ homotopy fiber bundle $\Rightarrow$ $\mathbb Z$-homology fiber bundle であり、本論文は最初の逆向きに反例を与える。

## 主結果

### Albanese morphism と1形式の反例（Theorem 1.1）

7次元滑らかな複素射影多様体 $X$ が存在し、その Albanese morphism

$$
f:X\longrightarrow\operatorname{Alb}(X)
$$

は次の5性質を同時に満たす。

1. $f$ は homotopy fiber bundle である。
2. smooth fibration $X\to S^1$ が存在する。
3. 任意の非零 $u\in H^1(X,\mathbb R)$ は零点のない実閉1形式で表せる。
4. $f$ は submersion ではない。
5. $X$ 上の全ての正則1形式は零点をもつ。

同一の例で「位相的には fiber bundle に近い」性質と正則1形式の非消滅性が分離する点が新規性である。

### Bobadilla--Kollár 予想への反例（Corollary 1.2）

homotopy fiber bundle であることは submersion であることを導かない。これは Bobadilla--Kollár 予想に残っていた (ii) $\Rightarrow$ (i) を反証する。

### Kotschick 予想への強い反例（Corollary 1.3）

(B) は (A) を導かない。より強く、$b_1(X)>0$ の7次元滑らかな複素射影多様体で、任意の非零 $u\in H^1(X,\mathbb R)$ は零点のない閉実1形式で表せるが、$u$ の harmonic representative は常に零点をもつ例が存在する。

### Aomoto 条件の限界（Theorem 1.4）

Introduction の Property (C) は、ある $\omega\in H^0(X,\Omega_X^1)$ が存在し、任意の connected finite étale cover $\pi:X'\to X$ に対して Aomoto complex

$$
H^0(X',\mathbb C)
\xrightarrow{\wedge\pi^*\omega}
H^1(X',\mathbb C)
\xrightarrow{\wedge\pi^*\omega}
H^2(X',\mathbb C)
\xrightarrow{\wedge\pi^*\omega}\cdots
$$

の全次数の cohomology が消える、という条件である。

Theorem 1.4 は Property (C) を満たす5次元滑らかな複素射影多様体 $X$ で、全ての実閉1形式が零点をもつ例を構成する。したがって (C) は (A) も (B) も導かない。

## 証明の見取り図

Theorem 1.1 の構成は、Corrêa--Kollár の局所的な $\mathbb Z$-homology fiber bundle の反例を大域化し、blow-up trick と組み合わせる。Whitehead の定理は Albanese morphism が homotopy fiber bundle であることを担う。Latour の判定を使って各非零 cohomology class に零点のない実閉1形式を作り、Tischler の定理から $S^1$ 上の smooth fibration を得る。Introduction は Farrell の定理による直接的確認も挙げる。

Theorem 1.4 では、Debarre--Jiang--Lahoz の「複素 torus ではない rational cohomology torus」と同じ blow-up trick を使い、基本群と finite étale cover の cohomology を制御する。Aomoto complex の完全性は $X$ と各被覆の cohomology の解析から得る。一方、非零 $u\in H^1(X,\mathbb Z)$ が定める infinite cyclic cover の $\mathbb F_2$-cohomologyが無限次元であることを示し、$X$ が $S^1$ 上に滑らかにファイバー化しないこと、従って全ての実閉1形式が零点をもつことを導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.15102v1](https://arxiv.org/abs/2607.15102v1)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Corollaries 1.2–1.3, Theorem 1.4
- **中心数式:** pp. 1–3（条件 (A), (B), (B')、Theorem 1.1 の写像、Property (C) の Aomoto complex）
- **論文構成の説明:** Introduction, pp. 2–4（各構成の概略）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
