---
layout: paper
title: "On the volume of K-semistable Fano manifolds"
title_ja: "K半安定Fano多様体の体積について"
authors: "Chi Li, Minghao Miao"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.DG]
arxiv_abstract: >-
  We prove that the anti-canonical volume of an $n$-dimensional K-semistable Fano manifold that is not $\mathbb{P}^n$ is at most $2n^n$. Moreover, the volume is equal to $2n^n$ if and only if $X\cong \mathbb{P}^1\times \mathbb{P}^{n-1}$ or $X$ is a smooth quadric hypersurface $Q\subset \mathbb{P}^{n+1}$. Our proof is based on a new connection between K-semistability and minimal rational curves.
topic: algebraic-geometry
tags: [k-stability, fano-varieties]
arxiv_id: "2506.17420v3"
arxiv_url: "https://arxiv.org/abs/2506.17420"
arxiv_submitted: "2025-06-20"
arxiv_updated: "2026-05-20"
summary: >-
  射影空間を除く$n$次元K半安定Fano多様体の反標準体積が$2n^n$以下であることを示し、等号例を射影空間の積と滑らかな二次超曲面に特徴づける。K安定性の付値判定と極小有理曲線を結ぶことで、最大体積に次ぐ鋭い体積境界を与える。
abstract_en: >-
  We prove that the anti-canonical volume of an $n$-dimensional K-semistable Fano manifold that is not $\mathbb{P}^n$ is at most $2n^n$. Moreover, the volume is equal to $2n^n$ if and only if $X\cong \mathbb{P}^1\times \mathbb{P}^{n-1}$ or $X$ is a smooth quadric hypersurface $Q\subset \mathbb{P}^{n+1}$. Our proof is based on a new connection between K-semistability and minimal rational curves.
summary_en: ""
abstract_ja: >-
  $n$次元K半安定Fano多様体が$\mathbb P^n$でなければ、反標準体積は$2n^n$以下である。等号が成り立つのは$\mathbb P^1\times\mathbb P^{n-1}$または$\mathbb P^{n+1}$内の滑らかな二次超曲面に限る。証明はK半安定性と極小有理曲線の新しい関係に基づく。
abstract_source_url: "https://arxiv.org/abs/2506.17420"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2506.17420v3](https://arxiv.org/abs/2506.17420v3)
- **著者:** Chi Li, Minghao Miao
- **初回投稿日:** 2025年6月20日
- **最終更新日:** 2026年5月20日
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

K半安定Fano多様体では、FujitaとLiuによる体積上界$(-K_X)^n\leq(n+1)^n$が知られ、等号は射影空間を特徴づける。本論文は射影空間を除いたときの「第2の体積」を決定する。

主張は鋭い上界$2n^n$と、その等号例の完全な記述である。二つの異なる等号例が現れる理由を、Fano多様体上の極小有理曲線の反標準次数と結びつける。

証明では極小有理曲線を中心とする付値をK半安定性の付値判定へ投入する。曲線の法束が自明な場合の一般的体積不等式と、残る場合に適合した重み付き爆発を組み合わせる点が新しい。

## 背景と問題設定

$n$次元Fano多様体の反標準体積は$(-K_X)^n$である。K半安定性を課すと射影空間が最大体積を持つが、その次に大きい値と等号例は未解決であった。論文は極小有理曲線$C$の反標準次数

$$
l_X=\min\{(-K_X\cdot C)\mid C\subset X\text{ は極小有理曲線}\}
$$

を体積評価の橋渡しに用いる。

## 主結果

### 主定理（Theorem 1.1）

$X\not\cong\mathbb P^n$を満たす$n$次元K半安定Fano多様体について

$$
(-K_X)^n\leq 2n^n
$$

が成り立つ。等号は$X\cong\mathbb P^1\times\mathbb P^{n-1}$または滑らかな二次超曲面$Q\subset\mathbb P^{n+1}$の場合に限る。正Ricci曲率のKähler–Einstein計量を持つKähler多様体にも適用される。

### トーリック版（Theorem 1.2, Corollary 1.3）

トーリックK半安定Fano多様体にも同じ上界が成り立ち、等号例は$\mathbb P^1\times\mathbb P^{n-1}$だけである。重心が原点の反射格子多面体$P$には$\operatorname{vol}(P)\leq2n^n/n!$という対応する鋭い評価が得られる。

### 自明な法束を持つ部分多様体（Theorem 1.4）

余次元$r$の滑らかな部分多様体$Z\subset X$の法束が自明で、$d=(-K_X)^{n-r}\cdot Z$なら

$$
(-K_X)^n\leq(r+1)^r\binom nr d=(-K_{\mathbb P^r\times Z})^n
$$

となり、等号は$X$が$\mathbb P^r\times Z$に双正則な場合に限る。

## 証明の見取り図

$l_X=n+1,n$では既存の特徴づけ定理を使い、$l_X=2$で曲線が埋め込まれる場合はTheorem 1.4へ帰着する。中間の$3\leq l_X\leq n-1$では、極小有理曲線の法束の分裂に合わせた型$(1^{\oplus(d-2)},2^{\oplus(n-d+1)})$の重み付き爆発を構成し、その付値をK半安定性判定に用いて体積を抑える。

## 原論文との対応

- **Abstractページ:** [arXiv:2506.17420v3](https://arxiv.org/abs/2506.17420v3)
- **Introduction:** Section 1, pp. 2–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.4; Corollaries 1.3
- **論文構成の説明:** p. 4
- **確認したarXivバージョン:** v3
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
