---
layout: paper
title: K-moduli with real coefficients
title_ja: 実係数の対数Fano対のKモジュライ
authors: Yuchen Liu, Chuyu Zhou
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: In this paper, we develop an algebraic K-stability theory (e.g. special test configuration theory and optimal destabilization theory) for log Fano $\mathbb R$-pairs, and construct a proper K-moduli space to parametrize K-polystable log Fano $\mathbb R$-pairs with some fixed invariants (e.g. dimension, volume, coefficients). All of these are well-known for log Fano $\mathbb Q$-pairs, and the strategy in this paper is trying to reduce the problems (in many cases) to $\mathbb Q$-coefficients case rather than rebuilding the whole program as in $\mathbb Q$-coefficients case.
topic: algebraic-geometry
tags:
- moduli
- k-stability
- fano-varieties
arxiv_id: 2412.15723v2
arxiv_url: https://arxiv.org/abs/2412.15723
arxiv_submitted: '2024-12-20'
arxiv_updated: '2026-11-23'
summary: 境界の係数が無理数でも、対数Fano対のK半安定性を特殊テスト配置で判定できる。次元・係数・体積を固定すると、K多重安定な対象を表す固有なモジュライ空間が得られる。
abstract_en: In this paper, we develop an algebraic K-stability theory (e.g. special test configuration theory and optimal destabilization theory) for log Fano $\mathbb R$-pairs, and construct a proper K-moduli space to parametrize K-polystable log Fano $\mathbb R$-pairs with some fixed invariants (e.g. dimension, volume, coefficients). All of these are well-known for log Fano $\mathbb Q$-pairs, and the strategy in this paper is trying to reduce the problems (in many cases) to $\mathbb Q$-coefficients case rather than rebuilding the whole program as in $\mathbb Q$-coefficients case.
summary_en: ''
abstract_ja: 実係数の境界を有理係数で近似する方法により、安定性閾値を実現する因子的付値の存在から、K半安定な対を分類する有限型スタックの構成までを扱う。実係数の場合には閾値自身も有理数とは限らない。
abstract_source_url: https://arxiv.org/abs/2412.15723
license_name: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
license_url: http://creativecommons.org/licenses/by-nc-sa/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2412.15723v2](https://arxiv.org/abs/2412.15723)
- **著者:** Yuchen Liu, Chuyu Zhou
- **初回投稿日:** 2024-12-20
- **最終更新日:** 2026-11-23
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

## 要約

境界因子の係数を連続的に動かしてK安定性の壁を考えると、有理点で構成したモジュライ空間だけでは任意の係数で何を分類するかが定まらない。

著者らは実係数の対に対して付値による判定を出発点とし、一つの対をどう退化させるかを記述する。その後、対を族として分類する問題に進む。

得られる良いモジュライ空間は固有で分離的である。CM実直線束の豊富性と射影性は、著者らがさらに期待する性質として区別されている。

## 背景と問題設定

対象は $-(K\_X+\Delta)$ が豊富な対数Fano実係数対である。有理係数の場合に整備された特殊テスト配置と最適不安定化の理論を、無理係数を許したときにどこまで引き継げるかが問題になる。

## 主結果

### 特殊テスト配置による判定（Theorem 1.1）

対がK半安定であるための必要十分条件は、すべての特殊テスト配置で一般化Futaki不変量が非負となることである。K半安定な対の弱特殊テスト配置でこの不変量が零なら、その配置は特殊である。

### 閾値を計算する付値（Theorem 1.2）

次元を $d$ とすると、$\delta(X,\Delta)<(d+1)/d$ ならば $\delta$ を実現する因子的付値が存在し、そのような付値はいずれも特殊である。$\delta\le1$ なら各付値を、中心ファイバーが元の対と同じ $\delta$ をもつ特殊テスト配置で実現できる。

### 固有な良いモジュライ空間（Theorem 1.3）

有限な正実係数集合のもとで次元 $d$、係数ベクトル $(a\_j)$、反対数標準体積 $v\_0>0$ を固定する。論文で定める境界 $\sum\_j a\_jD\_j$ をもつK半安定な対のクラスには有限型Artinスタックがあり、その固有で分離的な良いモジュライ空間はK多重安定な対象をパラメータ付ける。

## 証明の見取り図

特殊テスト配置については有理係数での結果と近似を組み合わせ、ベータ不変量を一般化Futaki不変量と結び付ける。モジュライの構成には、有界性と開性に加え、退化を制御するΘ還元性・S完全性および固有性の検証を用いる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2412.15723)
- **Introduction:** [PDF](https://arxiv.org/pdf/2412.15723v2) — §1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2412.15723v2
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
- **source\_scope:** Abstract and Introduction
