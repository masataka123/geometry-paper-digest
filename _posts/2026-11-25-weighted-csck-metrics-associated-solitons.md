---
layout: paper
title: Soliton-type metrics associated with weighted constant scalar curvature Kähler metrics on Fano manifolds
title_ja: 重み付き一定スカラー曲率計量と対応するソリトン
authors: Satoshi Nakamura
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We establish an existence equivalence between a weighted constant scalar curvature Kähler metric introduced by Lahdili and an associated soliton-type metric introduced in this article on Fano manifolds. We apply it to semisimple principal fibrations with Fano fiber. This yields a family of extremal Kähler metrics, including a constant scalar curvature Kähler metric, on a non-Fano complex four-fold with non-toric Fano fiber. A further application concerns Sasaki metrics on canonical circle bundles over $n$-dimensional Fano manifolds. For a fixed (possibly irregular) Reeb field, we show that there exists a Sasaki Mabuchi soliton if and only if there exists a Sasaki extremal metric whose transverse scalar curvature is strictly less than $n+1$. Finally, we characterize Reeb fields on the standard sphere $S^{2n+1}$ that admit Sasaki Mabuchi solitons.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- fano-varieties
- kahler-ricci-flow-solitons
arxiv_id: 2602.06306v2
arxiv_url: https://arxiv.org/abs/2602.06306
arxiv_submitted: '2026-02-06'
arxiv_updated: '2026-11-23'
summary: Fano多様体の反標準類で、重み付き一定スカラー曲率計量の存在を別の重みをもつソリトンの存在に結び付ける。対応する重みの正値性から、非トーリックなファイバー束と奇数次元球面について明示的な判定を得る。
abstract_en: We establish an existence equivalence between a weighted constant scalar curvature Kähler metric introduced by Lahdili and an associated soliton-type metric introduced in this article on Fano manifolds. We apply it to semisimple principal fibrations with Fano fiber. This yields a family of extremal Kähler metrics, including a constant scalar curvature Kähler metric, on a non-Fano complex four-fold with non-toric Fano fiber. A further application concerns Sasaki metrics on canonical circle bundles over $n$-dimensional Fano manifolds. For a fixed (possibly irregular) Reeb field, we show that there exists a Sasaki Mabuchi soliton if and only if there exists a Sasaki extremal metric whose transverse scalar curvature is strictly less than $n+1$. Finally, we characterize Reeb fields on the standard sphere $S^{2n+1}$ that admit Sasaki Mabuchi solitons.
summary_en: ''
abstract_ja: モーメント多面体上の二つの重みからソリトンの重みを定める。この関数が正なら二種の標準計量の存在が同値となり、横断的なSasaki計量の場合にも対応を移せる。
abstract_source_url: https://arxiv.org/abs/2602.06306
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.06306v2](https://arxiv.org/abs/2602.06306)
- **著者:** Satoshi Nakamura
- **初回投稿日:** 2026-02-06
- **最終更新日:** 2026-11-23
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Fano多様体では反標準類の中で、スカラー曲率を処方する方程式とRicci形式を処方する方程式を考えられる。重みを入れると方程式が変わり、一方の解がそのまま他方の解になるとは限らない。

Nakamuraは二つの問題に共通する存在障害を比較し、一方の重みから他方の重みを決める。正値性の条件を満たすと、解の存在を行き来できる。

この仕組みはFanoファイバーをもつ束の極値計量にも、Reeb場を変化させたときのSasaki計量にも具体的な判定を与える。

## 背景と問題設定

極大コンパクトトーラス $T$ のモーメント多面体 $P\_X$ 上で $v>0$ と $w$ を選ぶ。モーメント写像を $m$ とし、$\int\_Xv(m)\omega^n=\int\_X\omega^n$ および $\int\_X(S\_v(\omega)-w(m))v(m)\omega^n=0$ と正規化する。既知の極値計量とMabuchiソリトンの対応が出発点である。

## 主結果

### 反標準類での存在同値（Theorem 1.2）

対応する重みを
$$
g(v,w)(x)=v(x)\bigl(1+n+\langle(\log v)'(x),x\rangle-w(x)\bigr)
$$
とする。これが $P\_X$ 上で正なら、$2\pi c\_1(X)$ に $T$ 不変な $(v,w)$-CSCK計量があることと、同じ類に $T$ 不変な $g(v,w)$ ソリトンがあることは同値である。著者はこの対応についてApostolov–Lahdili–Nittaの独立の結果にも言及している。

### 非トーリックなファイバー束（Theorem 1.5）

種数二の曲線上で、平面三次曲線とその平面外の点に沿って射影三空間を吹き上げたFano三次元多様体をファイバーとする論文の束をとる。その適合類 $\alpha\_c$ は $c>c\_{\mathrm{sol}}$ で極値計量をもつ。閾値は $3200c^3+1033c^2-8466c-6846=0$ の1より大きい唯一の根である。$c=2+\sqrt{482}/8$ ではスカラー曲率が一定となる。

### Reeb場を固定した対応（Theorem 1.6）

標準束の単位円束上で正規化したReeb場を固定すると、指定された不変な横断Kähler類に、横断スカラー曲率が $n+1$ 未満のSasaki極値計量があることと、Sasaki Mabuchiソリトンがあることは同値である。

### 奇数次元球面での判定（Theorem 1.7）

$S^{2n+1}$ の正規化したReeb場の係数を $a\_0,\ldots,a\_n$ とすると、不変なSasaki Mabuchiソリトンの存在条件は
$$
\min\_{0\le i\le n}a\_i>\frac1{n+2}
$$
である。

## 証明の見取り図

二つのFutaki型不変量が一致するように $g$ を選び、ソリトンを構成する連続変形に沿ってMabuchi型汎関数を一様に評価する。Sasakiの場合は横断Ricciポテンシャルとスカラー曲率の変換則を用い、Reeb場が不規則の場合も底の重み付き方程式に帰着する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2602.06306)
- **Introduction:** [PDF](https://arxiv.org/pdf/2602.06306v2) — §1.1–1.3
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.5–1.7、Corollary 1.3。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2602.06306v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
