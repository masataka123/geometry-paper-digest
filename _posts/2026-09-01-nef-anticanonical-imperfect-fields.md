---
layout: paper
title: "Geometric singularities of regular surfaces with nef anti-canonical divisors over imperfect fields"
title_ja: "不完全体上の反標準因子がnefな正則曲面の幾何学的特異性"
authors: "Chongning Wang, Lei Zhang"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $S$ be a regular projective surface over a field $k$ of characteristic $p>0$, with $H^0(S,\mathcal{O}_S)=k$ and $-K_S$ nef. We prove that $S$ is geometrically integral over $k$ when $p\geq 7$, and we also find an example of $S$ that is not geometrically integral when $p=5$.
topic: algebraic-geometry
tags:
  - singularities
  - positivity
  - positive-characteristic
  - minimal-model-program
arxiv_id: "2604.05293v2"
arxiv_url: "https://arxiv.org/abs/2604.05293"
arxiv_submitted: "2026-04-07"
arxiv_updated: "2026-08-29"
summary: >-
  不完全体上の正則射影曲面で反標準因子がnefなら、標数 $p\geq7$ で幾何学的整域性が成り立つことを示す。標数5では幾何学的非被約な $K$-自明曲面を構成し、標数境界が最適であることも明らかにする。
abstract_en: ""
summary_en: >-
  The paper studies how regular projective surfaces over imperfect fields behave after extension to an algebraic closure. Nefness of the anticanonical divisor forces geometric integrality in characteristic at least seven, with a logarithmic extension describing the characteristic-five exceptional case. An explicit K-trivial example shows that the characteristic bound cannot be improved.
abstract_ja: >-
  正標数体上の正則射影曲面 $S$ で $H^0(S,\mathcal O_S)=k$ かつ $-K_S$ がnefなら、$p\geq7$ で $S$ は幾何学的整域的である。標数5には幾何学的整域的でない例が存在する。
abstract_source_url: "https://arxiv.org/abs/2604.05293"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2604.05293](https://arxiv.org/abs/2604.05293)
- **著者:** Chongning Wang, Lei Zhang
- **初回投稿日:** 2026-04-07
- **最終更新日:** 2026-08-29
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

不完全体上では正則多様体が幾何学的に滑らかとは限らず、純非分離的基礎変換によって非被約にさえなり得る。この現象は正標数のファイブレーションの一般ファイバーに自然に現れる。

本論文は $-K_S$ がnefな正則射影曲面に焦点を当てる。標数 $p\geq7$ では幾何学的整域性が強制されることを証明し、log canonical対にも幾何学的被約性として拡張する。

標数5では例外の特異点配置を精密に記述し、実際に幾何学的非被約な $K$-自明正則曲面を構成する。したがって幾何学的整域性に対する $p\geq7$ という境界は最適である。

## 背景と問題設定

$H^0(S,\mathcal O_S)=k$ の下では、正規固有曲面の幾何学的整域性は幾何学的被約性へ還元できる。反標準因子のnef性が、Frobenius基礎変換後の悪い特異性をどの標数から排除するかが中心問題である。

## 主結果

### 正則曲面の幾何学的整域性（Theorem 1.2）

標数 $p$ の体上の正則射影曲面 $S$ が $H^0(S,\mathcal O_S)=k$ と $-K_S$ nefを満たすとする。$p\geq7$ なら $S$ は $k$ 上幾何学的整域的である。

### log canonical対（Theorem 1.3）

$p\geq5$ で $(S,\Delta)$ がlog canonical、$-(K_S+\Delta)$ がnefなら、$p\geq7$ で $S$ は幾何学的被約となる。$p=5$ で非被約なら $\Delta=0$、$K_S\equiv0$ であり、正規化・最小解消後に現れる例外曲線配置も限定される。

### 境界の最適性（Theorem 1.4）

$k=\mathbb F_5(s_1,s_2)$ 上に $H^0(S,\mathcal O_S)=k$、$K_S\equiv0$ を満たす射影正則曲面で、幾何学的非被約なものが存在する。

## 証明の見取り図

最小解消後、$K_S$ が擬有効でない場合はMMPでMoriファイバー空間へ進み、$K_S\equiv0$ の場合を核心として扱う。単一のFrobenius基礎変換の被約正規化 $X$ に対するJi–Waldronの公式

$$
K_X+(p-1)C\equiv0,\qquad C=M+F,\quad M>0,\ F\geq0
$$

と $p$-factorialityを組み合わせる。最小解消上のMMPで例外曲線とファイバーの交点数を制約し、$p\geq7$ では非被約性と矛盾させる。$p=5$ では残る配置が実例として実現する。

## 原論文との対応
- **Abstractページ:** [arXiv:2604.05293](https://arxiv.org/abs/2604.05293)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.2–1.4、Corollary 1.6
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
