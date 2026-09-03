---
layout: paper
title: "Non-nef loci in mixed characteristic"
title_ja: "混標数における非nef locus"
authors: "Ryotaro Iwane"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We introduce relative versions of non-nef loci and restricted base loci, and investigate a relative version of Boucksom--Broustet--Pacienza's conjecture that these two loci coincide. We prove the conjecture holds for normal integral schemes projective and flat over a Dedekind domain of characteristic zero with mild singularities, such as BCM-regularity. This result is a mixed characteristic analogue of results of Cacciola--Di Biagio in characteristic zero and Sato in positive characteristic. To prove this result, we show that BCM-regularity is preserved under perturbations by divisors with small vanishing order.
topic: algebraic-geometry
tags:
  - positivity
  - singularities
  - positive-characteristic
  - birational-geometry
arxiv_id: "2609.02561v1"
arxiv_url: "https://arxiv.org/abs/2609.02561"
arxiv_submitted: "2026-09-02"
arxiv_updated: "2026-09-02"
summary: >-
  因子の非nef locusとrestricted base locusが一致するという予想を相対化し、標数0のDedekind scheme上の混標数族で証明する。混標数点にはBCM-regular type、等標数0の点にはklt typeという穏やかな特異性を仮定し、漸近test idealとBCM-regularityの摂動安定性を橋渡しに用いる。
abstract_en: ""
summary_en: >-
  The paper develops relative non-nef and restricted base loci for projective morphisms of excellent schemes. It proves their expected equality over a characteristic-zero Dedekind base when the total space has klt-type singularities in equal characteristic and BCM-regular-type singularities at mixed-characteristic points. The mixed-characteristic argument compares both loci with zero sets of asymptotic test ideals. A uniform perturbation theorem for BCM-regular pairs supplies the key local input.
abstract_ja: >-
  非nef locusとrestricted base locusの相対版を導入し、両者の一致予想を調べる。標数0のDedekind domain上で射影的かつ平坦な正規整schemeがBCM-regularityなどの穏やかな特異性を持つ場合に一致を証明する。これは標数0および正標数で知られた結果の混標数版であり、消滅位数の小さい因子による摂動のもとでBCM-regularityが保たれることが証明の鍵である。
abstract_source_url: "https://arxiv.org/abs/2609.02561"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.02561](https://arxiv.org/abs/2609.02561)
- **著者:** Ryotaro Iwane
- **初回投稿日:** 2026年9月2日
- **最終更新日:** 2026年9月2日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

因子 $D$ の非nef locus $\operatorname{NNef}(D)$ とrestricted base locus $\mathbf B_-(D)$ は、いずれもnef性の破れを測る。両者は一致すると予想され、標数0のklt型および正標数の強F-正則な場合には既知である。

本論文は両概念を射影射 $f:X\to S$ に対して相対化する。主結果は、標数0のDedekind schemeを底とする場合に、等標数0の点でklt type、混標数点でBCM-regular typeという仮定のもとで相対版の一致を証明する。

混標数での鍵は、漸近test idealの零点集合を介して二つのlocusを比較することである。そのために、BCM-regular pairが消滅位数の十分小さい因子による摂動のもとで一様にBCM-regularに保たれることを用いる。

## 背景と問題設定

big Cartier因子に対する数値的消滅次数から非nef locusを定め、安定base locusを微小なample摂動で正則化してrestricted base locusを定める。相対版の予想は、任意の相対 $\mathbb R$-Cartier因子 $D$ に対して

$$
\operatorname{NNef}(D/S)=\mathbf B_-(D/S)
$$

が成り立つというものである。

## 主結果

### 等標数での相対的一致（Theorem 1.3）

底が双対化複体を持つexcellentな $\mathbb Q$-schemeで、$X$ が有限個の閉点を除きklt typeならば予想が成り立つ。$F$-finiteな $\mathbb F_p$-scheme上でも、強F-正則性の対応する仮定のもとで同じ結論を得る。

### 混標数の主定理（Main Theorem 1.4）

$S$ を標数0のDedekind scheme、$f:X\to S$ を正規整schemeからの射影全射とする。$X$ の各非閉点が、等標数0かつklt type、または混標数かつBCM-regular typeのいずれかならば、すべての相対 $\mathbb R$-Cartier因子について上の一致が成り立つ。

### test idealによる比較（Theorem 1.6）

混標数DVR上で、log $\mathbb Q$-Gorenstein pair $(X,\Delta)$ とbig $\mathbb Q$-Cartier因子 $D$ に対し、$\tau(X,\Delta)$ の零点を除けば

$$
\operatorname{NNef}(D)=\mathbf B_-(D)
=\bigcup_{m>0}Z\bigl(\tau(X,\Delta,\|mD\|)\bigr)
$$

が成り立つ。

## 証明の見取り図

baseによる局所化と両locusの形成が可換であるため、底を等標数0または混標数のDVRへ帰着する。混標数では漸近test idealの一様大域生成からrestricted base locusをその零点集合に含める。逆向きの比較には、BCM-regularityが小さい因子摂動で保たれる一様安定性を使い、数値的消滅次数をtest idealの非自明性へ変換する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.02561](https://arxiv.org/abs/2609.02561)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.3, 1.4, 1.6; Corollary 1.5; Proposition 1.7
- **論文構成の説明:** Introduction, pp. 3–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
