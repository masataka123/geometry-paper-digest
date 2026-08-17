---
layout: paper
title: "K-stability of del Pezzo surfaces with a single quotient singularity"
title_ja: "単一商特異点を持つdel Pezzo曲面のK安定性"
authors: "In-Kyun Kim, Dae-Won Lee"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2507.13649v2"
arxiv_url: "https://arxiv.org/abs/2507.13649"
arxiv_submitted: "2025-07-18"
arxiv_updated: "2026-08-13"
summary: >-
  極小解消に自己交点 $-n,-m$ の二つの例外曲線を持つ単一商特異点付きdel Pezzo曲面族について、K安定・狭義K半安定・K不安定を分類する。
  Abban–Zhuang理論によるデルタ不変量評価などを使い、各安定性を持つ曲面を明示する。
abstract_en: ""
summary_en: >-
  This work classifies K-stability for explicit families of del Pezzo surfaces with one quotient singularity whose minimal resolution has two exceptional curves. The surfaces arise from controlled blowups of weighted projective planes followed by contraction. The main theorem lists all K-stable and strictly K-semistable members and declares the remaining cases unstable. The proof combines destabilizing criteria with local delta-invariant estimates from the Abban–Zhuang framework.
abstract_ja: >-
  極小解消が自己交点 $-n$ と $-m$ の二つの例外曲線を持つ、単一商特異点付きdel Pezzo曲面を研究する。重み付き射影平面の特定の点を爆発し曲線を収縮して得られる族について、K安定、狭義K半安定、K不安定となる場合を分類する。
abstract_source_url: "https://arxiv.org/abs/2507.13649"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2507.13649](https://arxiv.org/abs/2507.13649)
- **著者:** In-Kyun Kim, Dae-Won Lee
- **初回投稿日:** 2025年7月18日
- **最終更新日:** 2026年8月13日（v2）
- **主分類・副分類:** math.AG（主分類。副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Yau–Tian–Donaldson対応により、滑らかなFano多様体のK多重安定性はKähler–Einstein計量の存在と対応するが、特異Fano多様体のK安定性判定は繊細である。本論文は単一の商特異点を持つdel Pezzo曲面の具体的な族を扱う。

対象は重み付き射影平面 $\mathbb P(1,1,n)$ 上で同じ曲線上の点を爆発し、その曲線の狭義変換を収縮して得る $S^0_{n,m}$ と、さらに一般点を爆発した $S^k_{n,m}$ である。その極小解消には二つの例外曲線が現れ、商特異点の型は $\frac1{mn-1}(1,n)$ となる。

主結果は族のK安定性を明示的に三分類する。安定例だけでなく狭義半安定例を分離し、それ以外が不安定であることまで確定する点に内容がある。

## 背景と問題設定

Introductionでは、$\delta(X)>1$ が一様K安定性と同値であり、特にK安定性を含意するというvaluative criterionを出発点とする。Abban–Zhuang理論は局所的なデータからデルタ不変量を評価する体系を与え、Du Val del Pezzo曲面などの既存分類を可能にしてきた。

$S^k_{n,m}$ は、$\mathbb P(1,1,n)$ の $|\mathcal O(1)|$ に属する曲線上の $m$ 個の滑らかな点を爆発し、その狭義変換を収縮した後、さらに $k$ 個の一般点を爆発して構成される。論文は一般点条件を満たす固定された非空Zariski開集合内の曲面を扱う。

## 主結果

### 主定理（Theorem 1.4）

IntroductionのFigure 3またはRemark 1.3に現れるdel Pezzo曲面 $S$ について、次が成立する。

1. $S$ がK安定であるのは
   $$
   S^4_{2,2},\ S^5_{2,2},\ S^5_{3,2},\ S^6_{3,2},\ S^6_{4,2},\ S^7_{4,2}
   $$
   のいずれかと同型である場合に限る。
2. $S$ が狭義K半安定であるのは
   $$
   S^3_{2,2},\ S^5_{3,3},\ S^7_{5,2}
   $$
   のいずれかと同型である場合に限る。
3. 残りはすべてK不安定であり、特に $S^6_{4,3}$ はK不安定である。

この分類は、極小解消上のbigな反標準因子に関する一般化K安定性にも、反標準モデルとの比較結果を通じてつながる。

## 証明の見取り図

$m+n\ge8$ かつ $k\le n+2$ の範囲は既知の判定法により一括してK不安定とする。残る $m+n\le7$ の有限個の型にはAbban–Zhuang理論を適用し、デルタ不変量を評価して6個のK安定例と3個の狭義K半安定例を確定する。別途 $S^6_{4,3}$ の不安定性を示し、表に挙げた分類を尽くす。

## 原論文との対応

- **Abstractページ:** [arXiv:2507.13649](https://arxiv.org/abs/2507.13649)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorem 1.4
- **論文構成の説明:** Introduction, p. 5
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
