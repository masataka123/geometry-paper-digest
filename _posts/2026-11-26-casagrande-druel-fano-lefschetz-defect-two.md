---
layout: paper
title: On Casagrande-Druel Fano varieties with Lefschetz defect 2
title_ja: Lefschetz欠損が2のCasagrande–Druel型Fano多様体
authors: Pier Roberto Pastorino
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: The larger the Lefschetz defect delta(X) of a smooth complex Fano variety X, the more information we can deduce about the geometry of X. The structure of varieties with delta(X) greater than 2 is known. In this paper, we study the case delta(X)=2. In particular, we focus on Fano varieties with delta(X)=2 arising from the so called Casagrande-Druel construction, which we refer to as Construction A. We show that among the 19 families of Fano 3-folds with delta(X)=2 classified by Mori and Mukai, 15 arise from such construction. Moreover, we construct all Fano 4-folds with Picard number greater than 3 and delta(X)=2 admitting such a structure, obtaining 145 distinct families in total. This completes the classification of all Casagrande-Druel Fano 4-folds with delta(X)=2. To broaden the scope, we also study a generalized version of Construction A, which we call Construction B, and we show that 18 out of the 19 families of Fano 3-folds with delta(X)=2 arise from it.
topic: algebraic-geometry
tags:
- fano-varieties
- birational-geometry
- vector-bundles-sheaves
arxiv_id: 2510.20732v2
arxiv_url: https://arxiv.org/abs/2510.20732
arxiv_submitted: '2025-10-23'
arxiv_updated: '2026-11-25'
summary: 射影直線束の切断内を吹き上げる構成について、Fano性の十分条件と必要条件を調べる。Lefschetz欠損2、Picard数4以上の滑らかなFano四次元多様体のうち、Casagrande–Druel構成から得られる族は145個である。
abstract_en: The larger the Lefschetz defect delta(X) of a smooth complex Fano variety X, the more information we can deduce about the geometry of X. The structure of varieties with delta(X) greater than 2 is known. In this paper, we study the case delta(X)=2. In particular, we focus on Fano varieties with delta(X)=2 arising from the so called Casagrande-Druel construction, which we refer to as Construction A. We show that among the 19 families of Fano 3-folds with delta(X)=2 classified by Mori and Mukai, 15 arise from such construction. Moreover, we construct all Fano 4-folds with Picard number greater than 3 and delta(X)=2 admitting such a structure, obtaining 145 distinct families in total. This completes the classification of all Casagrande-Druel Fano 4-folds with delta(X)=2. To broaden the scope, we also study a generalized version of Construction A, which we call Construction B, and we show that 18 out of the 19 families of Fano 3-folds with delta(X)=2 arise from it.
summary_en: ''
abstract_ja: 欠損2のFano三次元多様体の既知の19族を二つの吹き上げ構成と照合し、通常の構成で15族、一般化した構成で18族を得る。四次元では通常の構成の全例を、底のFano性と因子・束の豊富性を使って分類する。
abstract_source_url: https://arxiv.org/abs/2510.20732
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2510.20732v2](https://arxiv.org/abs/2510.20732)
- **著者:** Pier Roberto Pastorino
- **初回投稿日:** 2025-10-23
- **最終更新日:** 2026-11-25
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

素因子の上に含まれる曲線だけで、周囲の多様体の数値的な曲線方向をどこまで見られるか。Lefschetz欠損は、このとき失われる次元の最大値である。

欠損が二である滑らかなFano多様体の中で、著者は射影直線束の切断に含まれる中心を吹き上げる例を調べる。束を分裂するものから拡張束に広げると、三次元の既知の分類のより多くの族が現れる。

四次元では分裂する構成について、Picard数を分けて族を数え切る。Picard数三の既知の結果と合わせて、この構成から来る欠損二の四次元の分類が完結する。

## 背景と問題設定

素因子 $D'$ に対し $N\_1(D',X)$ をその曲線類の像とし、$\delta\_X=\max\_{D'}\mathrm{codim}\_{N\_1(X)}N\_1(D',X)$ とする。構成の底は滑らかなFano多様体 $Z$、中心は $\mathbb P(E)$ の切断と滑らかな既約因子 $A\subset Z$ の逆像との交わりである。

## 主結果

### 吹き上げのFano性（Theorem 1.3）

$0\to\mathcal O\_Z\to E\to\mathcal O\_Z(D)\to0$ に伴う切断を用いる。$-K\_Z+D-A$ と $E\otimes\mathcal O\_Z(-K\_Z-D)$ がともに豊富なら吹き上げはFanoである。逆に吹き上げがFanoなら前者は豊富で、後者を $A$ に制限した束も豊富である。分裂する構成Aでは二つの大域的豊富性条件が必要十分となる。

### 四次元の族の個数（Theorem 1.4）

構成Aに由来し $\delta\_X=2,\ \rho\_X\ge4$ を満たす滑らかなFano四次元多様体は145族である。そのうち $\rho\_X=4,5,6$ はそれぞれ94族、50族、1族で、最後は二点で吹き上げた射影平面どうしの積である。これは欠損二の全Fano四次元多様体を一律に数えた値ではない。

## 証明の見取り図

吹き上げの反標準類を、底の因子および階数二の束の豊富性に帰着する。一般化した構成Bの非対称性をMaruyamaの初等変換で調べ、三次元では既知の族と比較する。四次元では底の候補と因子を調べ、同じ族の異なる表示を区別して分類する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2510.20732)
- **Introduction:** [PDF](https://arxiv.org/pdf/2510.20732v2) — §1, pp. 2–4 の構成と分類
- **Introduction中で言及された主要結果:** Theorems 1.3, 1.4。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2510.20732v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
