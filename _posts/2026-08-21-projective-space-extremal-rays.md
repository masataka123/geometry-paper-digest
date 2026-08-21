---
layout: paper
title: "A characterization of projective space via lengths of extremal rays"
title_ja: "極端射線の長さによる射影空間の特徴づけ"
authors: "Osamu Fujino, Eric Jovinelly, Brian Lehmann, Eric Riedl"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove a new characterization of complex projective space using lengths of extremal rays.
topic: algebraic-geometry
tags:
  - birational-geometry
  - minimal-model-program
  - singularities
arxiv_id: "2602.22192v1"
arxiv_url: "https://arxiv.org/abs/2602.22192"
arxiv_submitted: "2026-02-25"
arxiv_updated: "2026-02-25"
summary: >-
  $n$ 次元射影多様体上の一つの負の極端射線について、その長さが $n$ を超えるなら、多様体は射影空間に限られることを示す。MMP型特異点を許し、すべての曲線ではなくMori錐の一射線だけを調べればよい点が特徴である。
abstract_en: ""
summary_en: >-
  This paper gives a numerical recognition theorem for complex projective space. If one suitable negative extremal ray of an $n$-dimensional projective pair has length greater than $n$, the underlying variety must be projective $n$-space. The conclusion also controls the singularities of the pair and the degree of its boundary. The argument combines improved bend-and-break bounds, very free curves, and quasi-log geometry.
abstract_ja: >-
  複素射影空間を極端射線の長さから特徴づける。適切な負の極端射線の長さが次元を超えるとき、基礎多様体は射影空間となり、対の特異点と境界の次数にも強い制約が生じる。
abstract_source_url: "https://arxiv.org/abs/2602.22192"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.22192v1](https://arxiv.org/abs/2602.22192)
- **著者:** Osamu Fujino, Eric Jovinelly, Brian Lehmann, Eric Riedl
- **初回投稿日:** 2026-02-25
- **最終更新日:** 2026-02-25
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

反標準次数が大きい曲線によって $\mathbb P^n$ を認識するMori以来の問題を、Mori錐の一つの極端射線だけに局所化する。従来の滑らかな場合や商特異点の場合を越え、一般のMMP型特異点を含む設定を扱う。

中心となる量は、$K_X+\Delta$ に負な極端射線 $R$ 上の有理曲線の次数の下限 $l(R)$ である。$R$ が有理的かつinfinityで相対的ampleであり、$l(R)>n$ なら、$X$ は $\mathbb P^n$ に同型となる。

結論は基礎多様体の同型型だけでなく、対 $(X,\Delta)$ がterminalであり、$\Delta$ の次数が $1$ 未満であることまで含む。log canonical対には極端射線の通常の「長さ」を用いる直接的な系が得られる。

## 背景と問題設定

滑らかな $n$ 次元射影多様体では、すべての曲線の反標準次数が $n+1$ 以上なら射影空間になることが知られていた。その後、一つの極端射線の長さだけを使う結果や、限定された特異点を許す拡張が得られた。本論文は閾値を可能な限り弱い $>n$ とし、対に対する準対数構造の極端射線理論を用いる。

## 主結果

### 射影空間の特徴づけ（Theorem 1.1）

$X$ を $n$ 次元射影多様体、$\Delta$ を $K_X+\Delta$ が $\mathbb R$-Cartierとなる有効 $\mathbb R$-因子とする。$R\subset\overline{NE}(X)$ が有理的でinfinityで相対的ampleな $(K_X+\Delta)$-負極端射線であり、

$$
l(R):=\inf\{- (K_X+\Delta)\cdot C\mid C\text{ は有理曲線},\ [C]\in R\}>n
$$

を満たすなら、

$$
X\simeq\mathbb P^n
$$

であり、$(X,\Delta)$ はterminal、$\Delta$ は次数 $1$ 未満の因子である。

### log canonical対への帰結（Corollaries 1.2, 1.3）

log canonical対で長さが $n$ を超える負極端射線が存在する場合にも同じ結論が成り立つ。また $K_X+\Delta$ がnefでなく、すべての有理曲線 $C$ が

$$
-(K_X+\Delta)\cdot C>n
$$

を満たす場合も $X\simeq\mathbb P^n$ となる。

## 証明の見取り図

Introductionは三つの主要材料を挙げる。改良されたBend-and-Break評価により極端射線上の有理曲線の次数を鋭く抑え、弱い特異点をもつFano多様体上のvery free曲線を用いて射影空間の既知の特徴づけへ接続する。さらにAmbroに由来する準対数構造とその極端射線理論を使い、terminalの場合から一般の対へ議論を移す。

## 原論文との対応

- **Abstractページ:** [arXiv:2602.22192](https://arxiv.org/abs/2602.22192)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem 1.1; Corollaries 1.2, 1.3
- **論文構成の説明:** p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
