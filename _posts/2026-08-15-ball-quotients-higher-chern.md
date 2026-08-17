---
layout: paper
title: "Characterising Ball Quotients through their (higher) Chern Numbers"
title_ja: "高次Chern数による球商の特徴づけ"
authors: "Niklas Müller"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
tags:
  - birational-geometry
  - positivity
  - uniformization
  - chern-classes
arxiv_id: "2602.05509v3"
arxiv_url: "https://arxiv.org/abs/2602.05509v3"
arxiv_submitted: "2026-02-05"
arxiv_updated: "2026-07-10"
summary: >-
  bigかつnefな標準束をもつ滑らかな射影多様体のうち複素球商であるものを、高次Chern数の等式だけで特徴づける。
  高次Chern不等式と等号成立時の標準モデルおよび双有理写像の挙動を明示する。
abstract_en: ""
summary_en: >-
  This note gives a characteristic-number criterion for a minimal smooth projective variety of general type to be a complex ball quotient. A hierarchy of higher Chern-number inequalities is proved under equalities in all lower degrees. Equality at a given stage detects a ball-quotient canonical model and controls where the canonical contraction is an isomorphism. Requiring all stages recovers the smooth ball quotient itself.
abstract_ja: >-
  標準束がbigかつnefな滑らかな複素射影多様体について、全ての高次Chern数に関する一連の等式が複素単位球の商であることと同値だと証明する。より一般に、次数$k$未満のChern数が球商型の等式を満たすとき次数$k$の不等式を得て、その等号を標準モデルが球商であることと標準収縮の例外集合の余次元条件で特徴づける。
abstract_source_url: "https://arxiv.org/abs/2602.05509v3"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2602.05509v3](https://arxiv.org/abs/2602.05509v3)
- **著者:** Niklas Müller
- **初回投稿日:** 2026年2月5日
- **最終更新日:** 2026年7月10日
- **主分類・副分類:** math.AG（主）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Miyaoka–Yau不等式の等号は、標準束がampleな場合に球商を特徴づける。標準束がbigかつnefに退化すると、標準モデルは特異球商になっても、元の滑らかな極小モデル自体が球商とは限らない。

本論文は、二次Chern類だけでなく全ての高次Chern数を用いることで、この差を検出する。滑らかな射影$n$次元多様体$X$が球商であることを、各$i=1,\ldots,n$についての明示的な特性数等式だけで特徴づける。

さらに階層的な不等式を証明する。次数$k$未満で球商型の等式を仮定すると、$c_k(X)$に下界が生じ、等号は標準モデルが球商であることに加え、標準収縮が余次元$k+1$未満では同型であることを正確に表す。

## 背景と問題設定

$c_i(X)$を接束の第$i$ Chern類、$K_X$を標準束とする。bigかつnefな$K_X$は一般型の極小滑らかな射影多様体を表す。従来のMiyaoka–Yau等号は標準モデルの球商性を検出するが、標準収縮の例外集合を完全には排除しない。高次Chern数は、その例外集合を段階的に検出する役割を担う。

## 主結果

### 球商の完全な特徴づけ（Theorem 1.1）

$X$を$K_X$がbigかつnefな滑らかな複素射影$n$次元多様体とする。このとき$X$が複素単位球$\mathbb B^n$の商であることと、全ての$i=1,\ldots,n$について

$$
\left((n+1)^i c_i(X)-\binom{n+1}{i}c_1(X)^i\right)\cdot K_X^{n-i}=0
$$

が成り立つことは同値である。これは正則normal projective connectionの存在より弱い、純粋に特性数だけの条件である。

### 高次Chern不等式と等号条件（Theorem 1.2）

$2\leq k\leq n$とし、$i=1,\ldots,k-1$について

$$
c_i(X)\cdot K_X^{n-i}=\frac{1}{(n+1)^i}\binom{n+1}{i}c_1(X)^i\cdot K_X^{n-i}
$$

を仮定する。このとき

$$
c_k(X)\cdot K_X^{n-k}\geq\frac{1}{(n+1)^k}\binom{n+1}{k}c_1(X)^k\cdot K_X^{n-k}.
$$

等号成立は、標準モデル$X_{\mathrm{can}}$が（特異でもよい）球商$\mathbb B^n/\Lambda$であり、自然な写像$X\to X_{\mathrm{can}}$が補集合の余次元が少なくとも$k+1$である開集合上で同型となることと同値である。$k=2$は既知のMiyaoka–Yau型結果に一致する。

## 証明の見取り図

Introductionによれば、主定理はstringy Euler数を用いた一般結果から導かれる。標準モデルの商特異点に対してquasi-étale被覆とcrepantな解消を比較し、通常の最上位Chern数とstringyな量の差が特異点や例外集合を検出する。低次数での等式を順に仮定することで、高次不等式と等号時の余次元評価を得る。

## 原論文との対応
- **Abstractページ:** arXiv Abstract
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Theorem 1.2
- **論文構成の説明:** Introduction末尾およびSection 2冒頭
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
