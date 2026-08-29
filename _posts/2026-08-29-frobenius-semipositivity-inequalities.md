---
layout: paper
title: "Bogomolov type inequalities and Frobenius semipositivity"
title_ja: "Bogomolov型不等式とFrobenius半正値性"
authors: "Hao Max Sun"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG]
arxiv_abstract: >-
  We prove Bogomolov type inequalities for high Chern characters of semistable sheaves satisfying certain Frobenius semipositivity. The key ingredients in the proof are a high rank generalization of the asymptotic Riemann-Roch theorem and Langer's estimation theorem of the global sections of torsion free sheaves. These results give some Bogomolov type inequalities for semistable sheaves with vanishing low Chern characters. Our results are also applied to obtain inequalities of Chern characters of threefolds and varieties of small codimension in projective spaces and abelian varieties.
topic: algebraic-geometry
tags: [vector-bundles-sheaves, stability, positive-characteristic, chern-classes, positivity]
arxiv_id: "2504.16829v1"
arxiv_url: "https://arxiv.org/abs/2504.16829"
arxiv_submitted: "2025-04-23"
arxiv_updated: "2025-04-23"
summary: >-
  Frobenius半正値性を満たす半安定層について、高次Chern指標を制御するBogomolov型不等式を証明する。Frobenius引き戻しに対する漸近Riemann–RochとLangerの大域切断評価を結び、三次元多様体などのChern指標へ具体的な応用を与える。
abstract_en: ""
summary_en: >-
  The paper derives higher-Chern-character inequalities for semistable torsion-free sheaves under a Frobenius-semipositivity condition. Its main estimate extends the pattern behind the classical Bogomolov inequality to every relevant degree. The proof combines vanishing results, an asymptotic Riemann–Roch statement under Frobenius pullback, and Langer's bounds for global sections. Applications include numerical restrictions for threefolds and for subvarieties of projective and abelian varieties.
abstract_ja: >-
  一定のFrobenius半正値性を持つ半安定層に対し、高次Chern指標のBogomolov型不等式を示す。証明の主要材料は、高階数版の漸近Riemann–Roch定理と、捩れなし層の大域切断に関するLangerの評価である。低次Chern指標が消える場合の不等式や、三次元多様体などへの応用も得られる。
abstract_source_url: "https://arxiv.org/abs/2504.16829"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2504.16829v1](https://arxiv.org/abs/2504.16829v1)
- **著者:** Hao Max Sun
- **初回投稿日・最終更新日:** 2025年4月23日
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

古典的Bogomolov不等式は、標数0の滑らかな偏極射影多様体上の傾き半安定層について判別式の非負性を与える。本論文は、適切な正値性を追加すると同様の制約を高次Chern指標まで拡張できるかを問う。

中心となる条件はFrobenius半正値性$\phi_{sp}(E)\leq1$である。これは正標数へのspreadとFrobenius引き戻し後のコホモロジー消滅を通じて層$E$の正値性を測る。

主定理は任意の$1\leq t\leq d$について$\operatorname{ch}_t(E)$を階数と第一Chern指標から抑える。低次Chern指標が消える場合には、より仮定の少ない高次Bogomolov型不等式も導かれる。

## 背景と問題設定

$X$を$d$次元滑らかな射影多様体、$H$をample因子、$E$を階数$r$の捩れなし層とする。古典的な不等式は

$$
\Delta(E)H^{d-2}
=\bigl(\operatorname{ch}_1(E)^2-2\operatorname{ch}_0(E)\operatorname{ch}_2(E)\bigr)H^{d-2}\geq0
$$

である。論文は冪平均不等式を高次版のモデルとして用いる。

## 主結果

### 高次Chern指標不等式（Theorem 1.1）

標数0で$E$が$\mu_H$-半安定かつ$\phi_{sp}(E)\leq1$なら、$1\leq t\leq d$について

$$
H^{d-t}\operatorname{ch}_t(E)
\leq
\max\left\{
\frac{(H^{d-1}\operatorname{ch}_1(E))^t}
{t!(H^d r)^{t-1}},0
\right\}
$$

が成り立つ。

### 低次消滅からの不等式（Corollary 1.2）

強$\mu_H$-半安定な捩れなし層で、次数$t-1$まで対応する等式条件が成立すると、

$$
(H^{d-1}\operatorname{ch}_1(E))^t
-t!(H^d r)^{t-1}(H^{d-t}\operatorname{ch}_t(E))\geq0
$$

を得る。特に$H^{d-i}\operatorname{ch}_i(E)=0$が$1\leq i<t$で成り立てば、$H^{d-t}\operatorname{ch}_t(E)\leq0$となる。

### Abel多様体版（Theorem 1.3）

偏極Abel多様体$(A,\Theta)$上のGV$_{-1}$層に対しても、最高次Chern指標を最大傾きで抑える対応する不等式を示す。

## 証明の見取り図

まずFrobenius半正値層に対する二つのFujita型消滅定理を確立し、Frobenius引き戻しの下での漸近Riemann–Roch公式を導く。これを捩れなし層の大域切断に対するLangerの評価と組み合わせ、標数0へspread outして主不等式を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2504.16829v1](https://arxiv.org/abs/2504.16829v1)
- **Introduction:** Section 1, pp. 1–5
- **主要結果:** Theorem 1.1, Corollary 1.2, Theorem 1.3
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
