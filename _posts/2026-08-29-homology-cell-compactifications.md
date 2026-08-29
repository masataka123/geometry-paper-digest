---
layout: paper
title: "Compactification of homology cells, Fujita's conjectures and the complex projective space"
title_ja: "ホモロジーセルのコンパクト化・藤田予想・複素射影空間"
authors: "Ping Li, Thomas Peternell"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  We show that a compact Kähler manifold $M$ containing a smooth connected divisor $D$ such that $M \setminus D$ is a homology cell, e.g., contractible, must be projective space with $D$ a hyperplane, provided $\dim M \not \equiv 3 \pmod 4$. This answers conjectures of Fujita in these dimensions.
topic: algebraic-geometry
tags:
  - fano-varieties
arxiv_id: "2502.01072v3"
arxiv_url: "https://arxiv.org/abs/2502.01072"
arxiv_submitted: "2025-02-03"
arxiv_updated: "2025-12-22"
summary: >-
  滑らかな因子$D$の補集合がホモロジーセルとなるコンパクトKähler多様体$M$を分類する。$\dim M\not\equiv3\pmod4$では$(M,D)$が射影空間と超平面の標準対に限られることを示し、藤田のコンパクト化予想をこの次元範囲で解決する。
abstract_en: ""
summary_en: >-
  The paper classifies smooth Kähler compactifications whose boundary complement has the homology of a point. Except in dimensions congruent to three modulo four, the ambient manifold must be projective space and the boundary must be a hyperplane. In the remaining congruence class, the Introduction narrows any possible exception to a Fano manifold of Picard number one with specified index and Chern data. The result settles Fujita's compactification conjecture in the stated dimensions.
abstract_ja: >-
  コンパクトKähler多様体$M$が滑らかな連結因子$D$を含み、補集合$M\setminus D$がホモロジーセルであるとする。$\dim M\not\equiv3\pmod4$なら、$M$は複素射影空間であり$D$は超平面である。これにより該当次元における藤田の予想が解決される。
abstract_source_url: "https://arxiv.org/abs/2502.01072"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2502.01072v3](https://arxiv.org/abs/2502.01072)
- **著者:** Ping Li, Thomas Peternell
- **初回投稿日:** 2025年2月3日
- **最終更新日:** 2025年12月22日
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Hirzebruch以来の問題は、$\mathbb C^n$の滑らかなKählerコンパクト化が標準的な$(\mathbb P^n,\mathbb P^{n-1})$に限られるかを問う。藤田は補集合が一点と同じホモロジーをもつ「ホモロジーセル」まで一般化し、射影空間を特徴づける一連の予想を提示した。

本論文は、$M\setminus D$がホモロジーセルである滑らかな対$(M,D)$を調べる。次元が$3$ modulo $4$でない場合、$M\cong\mathbb P^n$かつ$D$は超平面であることを示す。

$n\equiv3\pmod4$では完全分類を主張せず、非標準例があるならPicard数1のFano多様体で特定の指数とChern類条件をもつことまで絞る。この未決の場合を明示する点も結果の重要な境界である。

## 背景と問題設定

$M\setminus D$がホモロジーセルであるとは、自然な写像$H^k(D;\mathbb Z)\to H^k(M;\mathbb Z)$が$0\leq k\leq2(n-1)$で同型となることをいう。標準例は$(\mathbb P^n,\mathbb P^{n-1})$であり、問題はこの弱い位相条件が複素幾何をどこまで決定するかにある。

## 主結果

### ホモロジーセルの分類（Theorem 1.5）

$M$を$n$次元射影多様体、$D$を滑らかな因子とし、$M\setminus D$がホモロジーセルであるとする。$n\not\equiv3\pmod4$なら

$$
M\cong\mathbb P^n,\qquad D\cong\mathbb P^{n-1}
$$

で、$D$は超平面である。$n\equiv3\pmod4$ではこの標準例か、Picard数1かつ指数$(n+1)/2$のFano多様体という二択になり、後者にはIntroduction記載のChern類条件も課される。

### Kählerコンパクト化への帰結（Theorem 1.7）

ホモロジーが消える開複素多様体$U$の滑らかなKählerコンパクト化$(M,D)$にもTheorem 1.5の結論が成り立つ。特に$n\not\equiv3\pmod4$では藤田の予想$(A_n)$が成立する。

### 写像を伴う因子への応用（Theorem 1.10）

滑らかな豊富因子$D\subset M$からの正則写像$f:D\to S$が$F:M\to S$へ延長される場合、$\dim M\geq2\dim S$となる。境界的な次元で$n\not\equiv3\pmod4$なら、$f$と$F$は射影空間をファイバーとする束で、各$f$のファイバーは対応する$F$のファイバー内の超平面となる。

## 証明の見取り図

Introductionによれば、藤田の既存結果とChern数恒等式を用いて$(M,D)$の第一Chern類を二つの場合へ絞り、その後に射影空間の指数による特徴づけを適用する。偶数次元での先行結果と$n\equiv1\pmod4$の場合の議論を統合し、残る$n\equiv3\pmod4$の候補をChern類条件つきで隔離する構成である。

## 原論文との対応

- **Abstractページ:** [arXiv:2502.01072](https://arxiv.org/abs/2502.01072)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.5, Theorem 1.7, Theorem 1.10
- **論文構成の説明:** p. 4
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
