---
layout: paper
title: Termination of the Kahler MMP with scaling
title_ja: スケーリング付きKähler極小モデルプログラムの停止
authors: Christopher Hacon, Pengchao Wang
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: In this article, we prove termination of klt flips with scaling for strongly \(\mathbb Q\)-factorial compact Kahler klt pairs $(X,B)$ with effective \(\mathbb Q\)-boundary. In particular, compact Kahler klt pairs with effective \(\mathbb Q\)-boundary have minimal models when \(K_X+B\) is pseudo-effective, and admit Mori fibre space models otherwise.
topic: algebraic-geometry
tags:
- minimal-model-program
- birational-geometry
- singularities
arxiv_id: 2611.29683v1
arxiv_url: https://arxiv.org/abs/2611.29683
arxiv_submitted: '2026-11-22'
arxiv_updated: '2026-11-22'
summary: 有効な有理境界を持つ強い有理因子性を満たすコンパクトKähler klt対について、スケーリング付き極小モデルプログラムが有限回で停止することを示す。境界のビッグ性を仮定せず、対数標準因子の擬有効性に応じて極小モデルかMoriファイバー空間を得る。
abstract_en: In this article, we prove termination of klt flips with scaling for strongly \(\mathbb Q\)-factorial compact Kahler klt pairs $(X,B)$ with effective \(\mathbb Q\)-boundary. In particular, compact Kahler klt pairs with effective \(\mathbb Q\)-boundary have minimal models when \(K_X+B\) is pseudo-effective, and admit Mori fibre space models otherwise.
summary_en: ''
abstract_ja: 各双有理変換の存在からは、操作が無限に続かないことまでは従わない。著者らはプログラムを通じて対数標準因子のCartier指数を一様に抑え、フリップ前後の食い違いの比較を相対消滅につなげる。
abstract_source_url: https://arxiv.org/abs/2611.29683
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.29683v1](https://arxiv.org/abs/2611.29683)
- **著者:** Christopher Hacon, Pengchao Wang
- **初回投稿日:** 2026-11-22
- **最終更新日:** 2026-11-22
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

極小モデルプログラムでは、対数標準因子が負になる方向を収縮やフリップで順に除く。各段階を実行できても、それだけでは有限回で終わる保証はない。

コンパクトKähler空間で一般化対に関する先行結果は、一般化境界がビッグである場合などを扱っていた。著者らは通常のklt対について、有効な有理境界をビッグと仮定せずに停止を示す。

終点の性格は対数標準因子の擬有効性で決まる。擬有効なら極小モデルに到達し、擬有効でなければMoriファイバー空間で終わる。

## 背景と問題設定

スケーリングではKähler類を加えてnefなところから始め、その係数を下げながら負の端射線を選ぶ。序論が未解決として区別するのは、一般化klt対に対する一般の停止問題である。

## 主結果

### スケーリング付き停止（Theorem 1.1）

$(X,B)$ は強い $\mathbb Q$ 因子性を満たすコンパクトKähler klt対で、$B$ は有効な $\mathbb Q$ 因子とする。$K\_X+B+\omega$ がnefになるKähler類 $\omega$ に対し、$\omega$ を用いた任意の $(K\_X+B)$ 極小モデルプログラムは有限回で停止する。

### 良い極小モデル（Corollary 1.2）

有効有理境界を持つコンパクトKähler klt対で $K\_X+B$ が擬有効なら、良い極小モデルが存在し、特に $\kappa(K\_X+B)\ge0$ である。これは停止定理と序論で引用される既存の結果を組み合わせた帰結である。

## 証明の見取り図

無限列を仮定するとスケーリング係数は零に近づき、有限回を除いてフリップだけが残る。Proposition 1.4は全段階で $R(K\_{X\_i}+B\_i)$ がCartierとなる共通の正整数 $R$ を与える。食い違いの評価でフリップ後の相対消滅を前の側に移し、相対生成性と反豊富性が両立しないことを使う。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.29683)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.29683v1) — §1–1.1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem 1.1, Corollary 1.2, Proposition 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.29683v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
