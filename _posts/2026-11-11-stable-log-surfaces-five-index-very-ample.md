---
layout: paper
title: $5I(K_X+Δ)$ is very ample on stable log surfaces
title_ja: 安定対数曲面上の5倍対数標準束の非常に豊富性
authors: Wenfei Liu, Sönke Rollenske
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: "We prove that Bombieri's bound for canonical models of surfaces of general type extends to stable log surfaces, that is, $mI(K_X+Δ)$ is very ample for every $m\\geq 5$ and every stable log surface $(X,Δ)$ over $\\mathbb{C}$ with reduced boundary and global Cartier index $I$.\n  On the way to this result we determine the cases where $|3I(K_X+Δ)|$ has base points."
topic: algebraic-geometry
tags:
- positivity
- singularities
- moduli
arxiv_id: 2611.13381v1
arxiv_url: https://arxiv.org/abs/2611.13381
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: 被約境界を持つ複素安定対数曲面で、対数標準因子の大域Cartier指数をIとすると、mI(K_X+Δ)はすべてのm≥5で非常に豊富であることを示す。3I倍の線形系に基点が残り得る例外も特定し、Bombieriの閾値をKSBA境界の曲面へ拡張する。
abstract_en: ''
summary_en: Stable log surfaces provide boundary points in compactified moduli spaces of surfaces. Liu and Rollenske show that the classical fivefold pluricanonical embedding bound survives there after accounting for the global Cartier index. They also isolate the exceptional cases for tricanonical base points. The proof combines local separation methods, restrictions to curves and log-canonical centres, and a doubling construction along the boundary.
abstract_ja: 一般型曲面の標準モデルで知られるBombieriの非常に豊富性の閾値を、被約境界を持つ安定対数曲面全体へ広げる。大域Cartier指数Iによる補正の後、5倍以上の対数標準因子で埋め込みが得られる。証明の鍵として3倍の線形系の基点自由性を調べ、境界なし・指数1・体積1という例外的状況での挙動を明らかにする。
abstract_source_url: https://arxiv.org/abs/2611.13381
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.13381v1](https://arxiv.org/abs/2611.13381)
- **著者:** Wenfei Liu, Sönke Rollenske
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

一般型曲面を複標準写像によって射影空間へ埋め込む際、何倍の標準因子が必要かは基本的な有効性の問題である。モジュライ空間をKSBAの意味でコンパクト化すると、境界には安定曲面や安定対数曲面が現れるため、滑らかな曲面や標準モデルでの閾値がどこまで残るかが問われる。

本論文は、被約境界を持つすべての複素安定対数曲面に、Bombieriの5倍という閾値が拡張することを示す。標準因子がCartierでない場合には、大域Cartier指数$I$で補正した$mI$倍を用いる。

もう一つの主結果は、3倍の線形系の基点自由性を妨げる例外を特定することである。この分類を加えることが、著者らの先行研究で得られていたやや弱い上界を5倍へ改善する鍵となる。

## 背景と問題設定

$(X,\Delta)$を複素数体上の安定対数曲面とし、境界$\Delta$は被約とする。大域Cartier指数$I$は$I(K\_X+\Delta)$がCartierとなる最小の正整数である。問題はこの線束の何倍が基点自由となり、さらに点と接方向を分離して埋め込みを与えるかである。

Introductionは、KSBAコンパクト化が古典的なGiesekerモジュライ空間を拡張することと、Bombieriの複標準写像の研究がこの構成において重要であることを説明する。著者らの2014年の結果では安定対数曲面の上界が古典的なものより悪かったが、その差を必要とする鋭い例を構成できていなかった。本論文はその差が不要であることを示す。

## 主結果

### 主定理1：5倍からの非常に豊富性（Theorem 1.1）

被約境界を持つ安定対数曲面$(X,\Delta)$とその大域Cartier指数$I$について、すべての整数$m\ge5$で

$$
mI(K\_X+\Delta)\quad\text{は非常に豊富}
$$

となる。したがって対応する完全線形系は$X$の射影埋め込みを与える。単に有理写像が双有理になる、あるいは基点自由になるという結論より強い。

境界の被約性と指数による補正は定理の一部であり、任意の係数の境界や未補正の$5(K\_X+\Delta)$について同じ結論を述べているわけではない。

### 主定理2：3倍に基点が残る例外（Theorem 1.2）

$|3I(K\_X+\Delta)|$は、次の例外を除いて基点を持たない。

$$
\Delta=0,\qquad I=K\_X^2=1,\qquad \chi(X)\in\lbrace 1,3\rbrace .
$$

ここで$\chi(X)$は構造層のEuler標数である。$\chi(X)=1$では基点がある場合とない場合があり、$\chi(X)=3$では常に基点がある。例外条件を満たせば一律に基点がある、という読み方はできない。

### 閾値の鋭さ

$|4I(K\_X+\Delta)|$の基点自由性は既知である。一方、2倍の基点自由性や3倍・4倍による埋め込みには、体積の大きさに依存しない局所的障害が存在する。このため5倍での非常に豊富性を、単に大体積の場合だけの結論として理解するのではなく、安定対数曲面全体に対する一様な閾値として捉える必要がある。

## 証明の見取り図

正常点付近ではKawachi、Maşek、LangerらのReider型結果を用い、適切な複標準曲線への制限によって点や接方向の分離を調べる。log-canonical中心ではFujinoの制限の方法を使う。これらは著者らの先行研究の枠組みを引き継ぐ。

新しい入力は、体積1のGorenstein安定曲面・対数曲面の分類に基づく3倍写像の基点自由性の特徴付けである。加えて境界に沿って二重化する構成により、境界付きの問題を$\Delta=0$の場合へ還元し、証明を簡素化する。Introductionの説明はこの組合せを示すものであり、後続節の局所正値性評価そのものをここで検証しているわけではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.13381)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.13381v1) — Section 1, pp. 1–2（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.13381v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
