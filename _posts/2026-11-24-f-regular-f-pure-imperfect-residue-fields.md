---
layout: paper
title: Classification of strongly $F$-regular and $F$-pure surface singularities with imperfect residue fields
title_ja: 不完全剰余体上の曲面特異点とFrobeniusによる分類
authors: Tatsuro Kawakami, Kenta Sato
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AC
arxiv_abstract: We study strongly $F$-regular and $F$-pure normal surface singularities whose residue fields are not necessarily perfect. We characterize strong $F$-regularity in terms of the weighted dual graph and geometric reducedness of the exceptional components of the minimal resolution, extending Hara's classification over algebraically closed residue fields. We also determine the possible dual graphs of $F$-pure surface singularities and give converse criteria. Notably, the exceptional components of an $F$-pure surface singularity are geometrically reduced unless the singularity is a rational double point.
topic: algebraic-geometry
tags:
- singularities
- positive-characteristic
arxiv_id: 2611.27597v1
arxiv_url: https://arxiv.org/abs/2611.27597
arxiv_submitted: '2026-11-20'
arxiv_updated: '2026-11-20'
summary: 正標数の二次元局所環について、極小解消の例外曲線を用いて強F正則性とF純性を調べる。不完全剰余体の上では、双対グラフに加え、例外成分が体拡大後も被約であるかが判定を左右する。
abstract_en: ''
summary_en: Resolving a surface over an imperfect residue field can produce exceptional curves that cease to be reduced after extending scalars. The classification identifies when Frobenius properties rule this out and how the remaining configurations depend on characteristic. In particular, the graph of an elliptic or rational double point does not by itself supply a general test for purity.
abstract_ja: 代数閉体上の曲面特異点の分類を一般の剰余体に移すと、例外曲線やその配置に捻れが生じる。本論文は、Frobeniusに関する局所条件から例外成分の幾何学的被約性を導き、グラフだけで判定できる場合と追加情報が必要な場合を特定する。
abstract_source_url: https://arxiv.org/abs/2611.27597
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.27597v1](https://arxiv.org/abs/2611.27597)
- **著者:** Tatsuro Kawakami, Kenta Sato
- **初回投稿日:** 2026-11-20
- **最終更新日:** 2026-11-20
- **主分類・副分類:** math.AG（主分類）; math.AC
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正標数の特異点では、Frobenius写像の分裂を通じた特異性の尺度と、解消上の例外曲線から得られる尺度を比較できる。剰余体が代数閉のときには、曲面についてHaraの分類がある。

不完全体の上では、被約な曲線であっても代数閉包への基底変換で冪零元が現れうる。双対グラフの形を知っただけでは、従来の分類をそのまま適用できない。

著者らはまず、F純性がどの例外曲線に幾何学的被約性を強制するかを示す。強F正則な場合の完全な判定を与えるとともに、F純性については標数2の捻れたカスプなど、追加条件の意味を具体化する。

## 背景と問題設定

対象は標数 $p>0$ の二次元Noether正規局所整域で、Frobeniusが有限であると仮定する。判定には極小解消の例外成分と、それらの交わりを記録する双対グラフを使う。

## 主結果

### 強F正則性の判定（Theorem A）

kltを仮定する。正則環を除くと、強F正則となる必要十分条件は、全例外成分が剰余体上で幾何学的に被約で、双対グラフが次のいずれかになることである。鎖型とその捻れた型には標数制限を加えない。星型とその捻れた型に許される組は

$$
(2,2,d)\ (d\geq2,\ p>2),\qquad
(2,3,3),(2,3,4)\ (p>3),\qquad
(2,3,5)\ (p>5)
$$

である。$p>3$ ならグラフ条件から幾何学的被約性も従う。

### F純性と追加判定（Theorem B）

対数的標準の場合、F純なものは、強F正則、有理二重点、所定の星型・拡張D型（捻れた型を含む）、カスプ・捻れたカスプ、単純楕円型のいずれかである。例えば $(3,3,3),(2,3,6)$ 型には $p\equiv1\bmod 3$、$(2,4,4)$ 型には $p\equiv1\bmod 4$ を課し、この条件は各型で十分でもある。単純楕円型では例外曲線の大域的F分裂を調べる。カスプと捻れたカスプでは全例外成分の幾何学的被約性が必要十分で、標数2ではこれが自動ではない。

### 例外成分の幾何学的被約性（Theorem C）

F純で有理二重点でなければ、極小解消の例外成分はすべて幾何学的に被約である。

## 証明の見取り図

例外曲線の定数体の分離性と幾何学的被約性を結び、曲線上の大域的F分裂を用いて分離性を示す。これにより有限分離拡大後の種数零の配置を射影直線の配置に帰着できる。有理二重点については超曲面としてFedderの判定を用いる余地が残る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.27597)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.27597v1) — Introduction §1（pp. 1–3）
- **Introduction中で言及された主要結果:** Theorems A, B, C
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.27597v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
